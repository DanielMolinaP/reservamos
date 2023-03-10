import React from 'react'
import Card from "./Card.jsx"

const Box = ({ cities, id, onClose }) => {
	console.log(cities)
	return (
		<div className='contenedor-card'>
			<button onClick={()=>onClose(cities,id)} className='boton-x' >x</button> 
			{
				cities.daily.map((c, index) => (
					<div>
						<Card
							key={index}
							temp={c.temp}
							description={c.description}
							max={c.max}
							min={c.min}
							name={cities.name}
							img={c.img}
							dt={c.dt}
						/>
					</div>
				)
				)
			}
		</div>
	)
}

export default Box