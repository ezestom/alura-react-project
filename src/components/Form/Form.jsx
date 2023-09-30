import { OptionsList } from "../OptionsList/OptionsList";
import "./Form.css";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Form({ registerWorker, teams, createTeam }) {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [photo, setPhoto] = useState("");
	const [org, setOrg] = useState("");
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("");

	const handleCreateTeam = (e) => {
		e.preventDefault();
		const team = {
			id: uuid(),
			name: title,
			primaryColor: color,
			secondaryColor: color,
		};
		createTeam(team);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const worker = {
			id,
			name,
			job,
			photo,
			org,
		};
		registerWorker(worker);
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
				<Input
					readOnly={true}
					title="Id"
					placeholder="Autogenerador de Id"
					value={id}
					setInput={setId}
					required={false}
				/>
				<OptionsList value={org} setInput={setOrg} teams={teams} />
				<Button text="Crear colaborador" />
			</form>
			<form className="form2" onSubmit={handleCreateTeam}>
				<Input
					title="Titulo"
					placeholder="Ingrese su titulo"
					required
					value={title}
					setInput={setTitle}
				/>
				<Input
					title="Color"
					placeholder="Ingrese su color en Hexadecimal"
					required
					value={color}
					setInput={setColor}
					type="color"
				/>
				<Button text="Crear equipo" />
			</form>
		</section>
	);
}
