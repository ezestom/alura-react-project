import { OptionsList } from "../OptionsList/OptionsList";
import "./Form.css";
import { Input } from "./Input";

export function Form() {
	return (
		<section className="form-container">
			<h2 className="form-title">
				Rellena el formulario para crear un colaborador
			</h2>
			<form className="form">
				<Input
					title="Nombre"
					placeholder="Ingrese su nombre completo"
				/>
				<Input title="Puesto" placeholder="Ingrese su puesto" />
				<Input title="Foto" placeholder="Ingrese su foto" />
				<OptionsList />
				<button>Enviar</button>
			</form>
		</section>
	);
}
