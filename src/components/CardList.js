import React from 'react'
import Card from "./Card";
import { EatLoading } from 'react-loadingg';
import './CardList.css'


function CardList({data, title, handleClick, isLoading}){

	return(

		<div className="row section">
			<h2 className={`title`}>{title}</h2>
			<div className="">
				{
					// loading
					isLoading && (
						<div className="">
							<EatLoading/>
						</div>
					)
				}
				{
					// no results
					!isLoading && data.length === 0 && (
						<div className="">
							<p>Nessun elemento trovato</p>
						</div>
					)
				}
				{
					// result
					!isLoading && data.length > 0 && (
						<div className="cards">
							{
								data.map((item, index) => (
									<Card
										key={index}
										title={item.title}
										year={item.year}
										creator={item.creator}
										genre={item.genre}
										episodes={item.episodes}
										image={item.image}
										handleClick={handleClick}
									/>
								))
							}
						</div>
					)
				}
			</div>


		</div>
	)
}

export default CardList