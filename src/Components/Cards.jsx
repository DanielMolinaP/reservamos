import React from 'react'
import "../style/Cards.css"
import loading from "../img/loading.gif"
import { useSelector } from "react-redux"
import Box from './Box'
import { useDispatch } from "react-redux";
import { filterB } from "../Redux/Acctions/index"

const Cards = () => {
	
	const cities = useSelector((state) => state.info);

	const dispatch = useDispatch();

	const onClose = (id) => {
		let newCities = cities.filter((c)=> c.id !== id)
		dispatch(filterB(newCities))
	}

	return (
		<>
			{cities.length > 0 ? (
				<div className="cards">
					{cities.map((c, index) => (
						<Box
							key={index}
							id={c.id}
							cities={c}
							onClose={()=> onClose(c.id)}
						/>
					))}
				</div>
			) : (
				<div className="carga">
					<div className='loadingimg'>
						<img className="imgloading" src={loading} alt="loading" />
					</div>
					<div className='textoloading'>
						<h1>Ingrese una ciudad...</h1>
					</div>
				</div>
			)}
		</>
	)
}

export default Cards