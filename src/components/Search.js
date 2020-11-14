import React from 'react'

function Search(props){

	return(
		<section className="section container is-fluid">
			<form className="form">
				<div className="field">
					<div className="control">
						<input className="input" type="text" placeholder="es. 1999"/>
					</div>
				</div>
			</form>
		</section>

	)
}

export default Search