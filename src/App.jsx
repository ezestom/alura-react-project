import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { MyOrg } from "./components/MyOrg/MyOrg";
import { Team } from "./components/Team/Team.jsx";

function App() {
	const [mostartFormulario, setMostrarFormulario] = useState(true);
	const [workers, setWorkers] = useState([]);

	const cambiarFormulario = () => {
		setMostrarFormulario(!mostartFormulario);
	};
	const registerWorker = (worker) => {
		setWorkers([...workers, worker]);
	};
	const deleteWorker = (worker) => {
		const newWorkers = workers.filter((w) => w.name !== worker.name);
		setWorkers(newWorkers);
		console.log(newWorkers);
	};

	const teams = [
		{
			name: "Equipo 1 - Programación",
			primaryColor: "#D6EAF8",
			secondaryColor: "#1F4B99", // Tono más fuerte de azul
		},
		{
			name: "Equipo 2 - Frontend",
			primaryColor: "#CCE6F5",
			secondaryColor: "#165B96", // Tono más fuerte de azul
		},
		{
			name: "Equipo 3 - Data Science",
			primaryColor: "#D4E8F2",
			secondaryColor: "#1D538C", // Tono más fuerte de azul
		},
		{
			name: "Equipo 4 - Devops",
			primaryColor: "#D4E5ED",
			secondaryColor: "#1C4F87", // Tono más fuerte de azul
		},
		{
			name: "Equipo 5 - UX / UI",
			primaryColor: "#CDE4F0",
			secondaryColor: "#195485", // Tono más fuerte de azul
		},
		{
			name: "Equipo 6 - Mobile",
			primaryColor: "#CDE9F5",
			secondaryColor: "#1A5A92", // Tono más fuerte de azul
		},
		{
			name: "Equipo 7 - Innovación y Gestión",
			primaryColor: "#D4E7F2",
			secondaryColor: "#1D538C", // Tono más fuerte de azul
		},
	];

	return (
		<section className="app">
			<Header />
			{mostartFormulario && (
				<Form
					registerWorker={registerWorker}
					teams={teams.map((equipo) => {
						return equipo.name;
					})}
				/>
			)}
			<MyOrg cambiarFormulario={cambiarFormulario} />
			{teams.map((equipo, index) => (
				<Team
					key={index}
					equipo={equipo.name}
					primaryColor={equipo.primaryColor}
					secondaryColor={equipo.secondaryColor}
					workers={workers}
					deleteWorker={deleteWorker}
				/>
			))}
		</section>
	);
}

export default App;
