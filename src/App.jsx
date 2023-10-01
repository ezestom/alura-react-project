import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { MyOrg } from "./components/MyOrg/MyOrg";
import { Team } from "./components/Team/Team.jsx";
import { v4 as uuid } from "uuid";

function App() {
	const [mostartFormulario, setMostrarFormulario] = useState(true);
	const [workers, setWorkers] = useState([
		{
			id: uuid(),
			name: "Juan Perez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 1 - Programación",
			fav: true,
		},
		{
			id: uuid(),
			name: "Pedro Rodriguez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 2 - Frontend",
			fav: false,
		},
		{
			id: uuid(),
			name: "Jorge Lopez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 3 - Data Science",
			fav: false,
		},
		{
			id: uuid(),
			name: "Luis Hernandez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 4 - Devops",
			fav: false,
		},
		{
			id: uuid(),
			name: "Carlos Perez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 5 - UX / UI",
			fav: false,
		},
		{
			id: uuid(),
			name: "Javier Perez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 6 - Mobile",
			fav: false,
		},
		{
			id: uuid(),
			name: "Javier Perez",
			job: "Programador",
			photo: "https://www.w3schools.com/howto/img_avatar.png",
			org: "Equipo 7 - Innovación y Gestión",
			fav: false,
		},
	]);
	const [teams, setTeams] = useState([
		{
			id: uuid(),
			name: "Equipo 1 - Programación",
			primaryColor: "#D6EAF8",
			secondaryColor: "#1F4B99", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 2 - Frontend",
			primaryColor: "#CCE6F5",
			secondaryColor: "#165B96", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 3 - Data Science",
			primaryColor: "#D4E8F2",
			secondaryColor: "#1D538C", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 4 - Devops",
			primaryColor: "#D4E5ED",
			secondaryColor: "#1C4F87", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 5 - UX / UI",
			primaryColor: "#CDE4F0",
			secondaryColor: "#195485", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 6 - Mobile",
			primaryColor: "#CDE9F5",
			secondaryColor: "#1A5A92", // Tono más fuerte de azul
		},
		{
			id: uuid(),
			name: "Equipo 7 - Innovación y Gestión",
			primaryColor: "#D4E7F2",
			secondaryColor: "#1D538C", // Tono más fuerte de azul
		},
	]);

	const cambiarFormulario = () => {
		setMostrarFormulario(!mostartFormulario);
	};
	const registerWorker = (worker) => {
		setWorkers([...workers, worker]);
	};

	const createTeam = (newTeam) => {
		setTeams([...teams, newTeam]);
	};

	const deleteWorker = (worker) => {
		const newWorkers = workers.filter((w) => w.name !== worker.name);
		setWorkers(newWorkers);
	};
	const updateColor = (color, name) => {
		const newTeams = teams.map((equipo) => {
			if (equipo.name === name) {
				equipo.primaryColor = color;
			}
			return equipo;
		});
		setTeams(newTeams);
	};
 const updateFav = (id) => {
		const newWorkers = workers.map((worker) => {
			if (worker.id === id) {
				worker.fav = !worker.fav;
			}
			return worker;
		});
		setWorkers(newWorkers);
	};

	return (
		<section className="app">
			<Header />
			{mostartFormulario && (
				<Form
					registerWorker={registerWorker}
					createTeam={createTeam}
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
					updateColor={updateColor}
					updateFav={updateFav}
					fav={workers.fav}
				/>
			))}
		</section>
	);
}

export default App;
