import React, { useState } from 'react'
import { getCoordinatesByName, exiError, erroRepeat, exiError1 } from "../Redux/Acctions/index"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../style/Searchbar.css"

const Searchbar = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");
	const err = useSelector((state) => state.error)
	const err1 = useSelector((state) => state.error1)
	const cities = useSelector((state) => state.info)

	if (err) {
		Swal.fire({
			position: "top",
			title: "Ciudad no encontrada",
			width: 600,
			padding: "3em",
			color: "white",
			background: "transparent",
			imageUrl: "https://cdn-icons-png.flaticon.com/512/463/463612.png",
			backdrop: `
								
								rgba(0, 0, 0, 0.790)
								no-repeat 
								`,
			imageWidth: "150px",
			confirmButtonColor: "#e04f5f"
		}).then(dispatch(exiError()))
	}

	if (err1) {
		Swal.fire({
			position: "top",
			title: "Esta ciudad ya esta en la lista ",
			width: 600,
			padding: "3em",
			color: "white",
			background: "transparent",
			imageUrl: "https://cdn-icons-png.flaticon.com/512/463/463612.png",
			backdrop: `
                      
                      rgba(0, 0, 0, 0.790)
                      no-repeat 
                      `,
			imageWidth: "150px",
			confirmButtonColor: "#e04f5f"
		}).then(dispatch(exiError1()))
	}

	const verificate = (cities, input) => {
		let dis = cities.some((e) => e.name.toLowerCase().includes(input.toLowerCase()))
		return dis
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		verificate(cities, input) ? dispatch(erroRepeat()) : dispatch(getCoordinatesByName(input))
		setInput("")
	}

	return (
		<form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
			<input className="imputext"
				type="text"
				placeholder="Ciudad..."
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<input className="boton-add" type="submit" value="Agregar" />
		</form>
	);
}

export default Searchbar