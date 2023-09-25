import { Worker } from "../Worker/Worker";
import "./Team.css";

export function Team(props) {
	const { equipo, primaryColor, secondaryColor } = props;
	
	let styles = {
		backgroundColor: primaryColor,
		color: secondaryColor,
	};

	return (
		<section className="team" style={styles}>
			<h3 style={{borderBottom:{primaryColor}}}>{equipo}</h3>
			<div className="workers">
				<Worker />
				<Worker />
				<Worker />
				<Worker />
				<Worker />
			</div>
		</section>
	);
}
