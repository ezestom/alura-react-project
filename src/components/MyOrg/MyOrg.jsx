import "./MyOrg.css";
import botonAdd from "../../img/botonAdd.png";

export function MyOrg(props) {
	return (
		<section className="myorg-container">
			<article className="myorg-article">
				<h3>Mi organización</h3>
				<img
					src={botonAdd}
					alt="botonAdd"
					onClick={props.cambiarFormulario}
				/>
			</article>
		</section>
	);
}
