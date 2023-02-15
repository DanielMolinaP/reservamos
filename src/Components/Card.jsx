import React from 'react'
import "../style/Card.css"

const Card = ({ min, max, name, img, description, temp }) => {
	return (
		<div className='contenedor-card'>
			<div className="card-title" >
				<h1 >{name}</h1>
			</div>
			<div className='temp'>
				<h4>{temp}°</h4>
			</div>
			<div className='imgweather'>
				{/* IMAGEN */}
				<img className='image' src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
			</div>
			<div className='description'>
				<h4>{description}</h4>
			</div>
			<div className='maxmin'>
				{/* MIN */}
				<div className='MIN'>
					<h4>Min</h4>
					<h4>{min}°</h4>
				</div>
				{/* MAX */}
				<div className='MAX'>
					<h4>Max</h4>
					<h4>{max}°</h4>
				</div>
			</div>

		</div>
	)
}

export default Card