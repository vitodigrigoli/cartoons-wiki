import React, {useState} from 'react'

function Search(props){

	const [formValue, setFormValue] = useState( {
		field: 'year',
		value: ''
	})

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value
		})
	}

	return(
		<section className="section is-widescreen">
			<form className="form is-fluid">
				<div className="field has-addons">
					<p className="control has-icons-left ">
				    <span className="select ">
				      <select name="field" value={formValue.field} onChange={handleChange}>
				        <option value="year">Year</option>
				        <option value="category">Category</option>
				        <option value="title">Title</option>
				      </select>
				    </span>
						<span className="icon is-small is-left ">
              <i className="fas fa-search has-text-info"/>
             </span>
					</p>
					<p className="control is-expanded">
						<input className="input" type="text" placeholder="es. 1999" name="value" value={formValue.value} onChange={handleChange}/>
					</p>
					<p className="control">
						<button className="button is-info">
							Search
						</button>
					</p>
				</div>
			</form>
		</section>


	)
}

export default Search