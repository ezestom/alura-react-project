export function OptionsList(props) {
	const handleChange = (event) => {
		console.log(event.target.value);
		props.setInput(event.target.value);
	};
	return (
		<>
			<label htmlFor="equipos">Equipos</label>
			<select name="equipos" id="equipos" onChange={handleChange}>
				<option value="" disabled defaultValue="" hidden>
					Seleccione un equipo
				</option>
				{props.equipos.map((equipo, index) => {
					return <option key={index}>{equipo}</option>;
				})}
			</select>
		</>
	);
}
