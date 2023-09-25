import { OptionsList } from "../OptionsList/OptionsList";
import "./Form.css";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import { useState } from "react";
export function Form() {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [photo, setPhoto] = useState("");
	const [org, setOrg] = useState("");

	console.log(name, job, photo, org);

	function handleSubmit(e) {
		e.preventDefault();
		const colaborador = {
			name: name,
			job: job,
			photo: photo,
			org: org,
		};
	}
	return (
		<section className="form-container">
			<h2 className="form-title">Crear un colaborador</h2>
			<form className="form" onSubmit={handleSubmit}>
				<Input
					title="Nombre"
					placeholder="Ingrese su nombre completo"
					required
					input={name}
					setInput={setName}
				/>
				<Input
					title="Puesto"
					placeholder="Ingrese su puesto"
					required
					input={job}
					setInput={setJob}
				/>
				<Input
					title="Foto"
					placeholder="Ingrese su foto"
					required
					input={photo}
					setInput={setPhoto}
				/>
				<OptionsList input={org} setInput={setOrg} />
				<Button text="Crear colaborador" />
			</form>
		</section>
	);
}
