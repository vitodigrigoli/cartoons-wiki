import React from 'react'
import Card from "./Card";
import { EatLoading } from 'react-loadingg';
import './CardList.css'


function CardList({data, handleClick, isLoading}){

	return(

		<div className="container is-fluid  ">
			<div className="columns is-mobile" id="scroll">
				{
					isLoading && (
						<div className="column mt-5">
							<EatLoading/>
						</div>
					)
				}
				{
					!isLoading && data.length === 0 && (
						<div className="column">
							<p>Nessun elemento trovato</p>
						</div>
					)
				}
				{
					!isLoading && data.length > 0 && (
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
					)
				}
			</div>


		</div>
	)
}

export default CardList