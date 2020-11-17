import React from 'react'
import './Card.css'

function Card({title, year, creator, genre, episodes, image,handleClick } ){
	return(
		<div className="card">
			<div className="card__image" style={{backgroundImage: "url(" + image + ")"}}>
			</div>
			<div className="card__content">
				<div className="media">
					<div className="media-content">
						<p className="title is-size-6 is-size-7-mobile">{title}</p>
						<p className="subtitle is-7">{creator[0]}</p>
						<div className="buttons are-small">
						{
							genre.map( (category, index) => <button key={index} className="button is-link is-light" name={`genre`} value={category} onClick={handleClick}>{category}</button> )
						}
							<button className="button is-link is-light" name="year" value={year} onClick={handleClick}>{year}</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	)

}

export default Card