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
						<p className={`is-size-7 has-text-weight-semibold`}>Category:
							{
								genre.map( (category, index) => <span key={index} className="is-size-7 ml-1 has-text-weight-normal">{category}</span> )
							}
						</p>
						<div className="buttons are-small mt-3">
							<button className="button is-link is-light" name="year" value={year} onClick={handleClick}>{year}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Card