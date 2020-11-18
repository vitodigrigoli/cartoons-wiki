import React from 'react'
import './Search.css'

function Search({handleChange, handleSubmit, handleReset, field, value}){
	return(
		<section className="section">
			<form className="form" onSubmit={handleSubmit}>
				<div className="field has-addons">
					<p className="control has-icons-left  ">
				    <span className="select ">
				      <select name="field" value={field} onChange={handleChange}>
				        <option value="year">Year</option>
				        <option value="title">Title</option>
				      </select>
				    </span>
						<span className="icon is-small is-left ">
              <i className="fas fa-search has-text-info"/>
             </span>
					</p>
					<p className="control is-expanded">
						<input className="input" type="text" placeholder="es. 1999" name="value" value={value} onChange={handleChange}/>
					</p>
				</div>

				<div className="field is-grouped ">
					<p className="control">
						<button className="button is-primary">
							Search
						</button>
					</p>
					<p className="control">
						<button className="button is-info is-light" type={`button`} onClick={handleReset}>
							Reset
						</button>
					</p>
				</div>


			</form>
		</section>


	)
}

export default Search