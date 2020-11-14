import React from 'react'

function Card({title, year, creator, genre, episodes, image,handleClick } ){
	return(
		<div className="card column is-narrow is-one-fifth-desktop is-one-quarter-tablet is-half-mobile">
			<div className="card-image">
				<figure className="image">
					<img src={`${image}`} alt={`${title}`}/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-size-5 is-size-6-mobile">{title}</p>
						<p className="subtitle is-7">{creator[0]}</p>
						<div className="buttons are-small">
						{
							genre.map( (category, index) => <button key={index} className="button is-link is-light" value={category} onClick={handleClick}>{category}</button> )
						}
							<button className="button is-link is-light" value={year} onClick={handleClick}>{year}</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	)

}

export default Card