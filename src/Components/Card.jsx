import React from 'react'
import "../style/Card.css"

const Card = ({ min, max, name, img, description, temp, dt }) => {
	// let day= new Date()
	// let dayR = day.getMilliseconds(dt)
	// console.log(dayR)
	const fecha = new Date(dt * 1000);

	// usa los métodos getFullYear(), getMonth(), getDate(), getHours(), getMinutes() y getSeconds()
	// para obtener los componentes de la fecha y la hora
	const anno = fecha.getFullYear();
	const mes = fecha.getMonth() + 1; // Agrega 1 porque los meses se numeran de 0 a 11
	const dia = fecha.getDate();

	// crea una cadena de fecha legible en el formato "YYYY-MM-DD HH:MM:SS"
	const fechaLegible = `${anno}-${mes.toString().padStart(2, '0')} -${dia.toString().padStart(2, '0')}`;

	console.log(fechaLegible);
	return (
		<div className='contenedor-card'>
			<div className="card-title" >
				<h1 >{name}</h1>
			</div>
			<div className='fecha'>
				<h2>{fechaLegible}</h2>
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