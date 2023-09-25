import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { MyOrg } from "./components/MyOrg/MyOrg";

function App() {
	const [mostartFormulario, setMostrarFormulario] = useState(true);

	const cambiarFormulario = () => {
		setMostrarFormulario(!mostartFormulario);
	};
	return (
		<section className="app">
			<Header />
			{mostartFormulario && <Form />}
			<MyOrg cambiarFormulario={cambiarFormulario} />
		</section>
	);
}

export default App;
