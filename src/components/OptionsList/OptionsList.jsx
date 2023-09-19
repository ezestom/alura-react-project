export function OptionsList() {
	const equipos = [
		"Equipo 1 - Programación",
		"Equipo 2 - Front End",
		"Equipo 3 - Data Science",
		"Equipo 4 - DeVops",
		"Equipo 5 - UX / UI",
		"Equipo 6 - Movíl",
		"Equipo 7 - Inovación y Gestión",
	];
	return (
		<>
			<label htmlFor="equipos">Equipos</label>
			<select name="equipos" id="equipos">
				{equipos.map((equipo, index) => {
					return <option key={index}>{equipo}</option>;
				})}
			</select>
		</>
	);
}
