import { OptionsList } from "../OptionsList/OptionsList";
import "./Form.css";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import { useState } from "react";


export function Form(props) {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [photo, setPhoto] = useState("");
	const [org, setOrg] = useState("");

	

	function handleSubmit(e) {
		e.preventDefault();
		console.log();
		const colaborador = {
			name,
			job,
			photo,
			org,
		};
		console.log(colaborador);
	}
	return (
		<section className="form-container">
			<h2 className="form-title">Crear un colaborador</h2>
			<form className="form" onSubmit={handleSubmit}>
				<Input
					title="Nombre"
					placeholder="Ingrese su nombre completo"
					required
					value={name}
					setInput={setName}
				/>
				<Input
					title="Puesto"
					placeholder="Ingrese su puesto"
					required
					value={job}
					setInput={setJob}
				/>
				<Input
					title="Foto"
					placeholder="Ingrese su foto"
					required
					value={photo}
					setInput={setPhoto}
				/>
				<OptionsList value={org} setInput={setOrg} equipos={props.equipos} />
				<Button text="Crear colaborador" />
			</form>
		</section>
	);
}
