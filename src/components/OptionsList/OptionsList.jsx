export function OptionsList(props) {
	const handleChange = (event) => {
		props.setInput(event.target.value);
	};
	return (
		<>
			<label htmlFor="equipos">Equipos</label>
			<select name="equipos" id="equipos" onChange={handleChange}>
				<option value="" disabled defaultValue="" >
					Seleccione un equipo
				</option>
				{props.teams.map((equipo, index) => {
					return <option key={index}>{equipo}</option>;
				})}
			</select>
		</>
	);
}
