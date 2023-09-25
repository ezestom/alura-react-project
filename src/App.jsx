import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { MyOrg } from "./components/MyOrg/MyOrg";
import { Team } from "./components/Team/Team.jsx";

function App() {
	const [mostartFormulario, setMostrarFormulario] = useState(true);

	const cambiarFormulario = () => {
		setMostrarFormulario(!mostartFormulario);
	};
	const equipos = [
		{
			name: "Equipo 1 - Programación",
			primaryColor: "#D6EAF8",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 2 - Frontend",
			primaryColor: "#CCE6F5",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 3 - Data Science",
			primaryColor: "#D4E8F2",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 4 - Devops",
			primaryColor: "#D4E5ED",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 5 - UX / UI",
			primaryColor: "#CDE4F0",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 6 - Mobile",
			primaryColor: "#CDE9F5",
			secondaryColor: "#646cff",
		},
		{
			name: "Equipo 7 - Innovación y Gestión",
			primaryColor: "#D4E7F2",
			secondaryColor: "#646cff",
		},
	];

	return (
		<section className="app">
			<Header />
			{mostartFormulario && (
				<Form
					equipos={equipos.map((equipo) => {
						return equipo.name;
					})}
				/>
			)}
			<MyOrg cambiarFormulario={cambiarFormulario} />
			{equipos.map((equipo, index) => (
				<Team
					key={index}
					equipo={equipo.name}
					primaryColor={equipo.primaryColor}
					secondaryColor={equipo.secondaryColor}
				/>
			))}
		</section>
	);
}

export default App;
