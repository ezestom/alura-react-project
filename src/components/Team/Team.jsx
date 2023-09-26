import { Worker } from "../Worker/Worker";
import "./Team.css";

export function Team(props) {
	const { equipo, primaryColor, secondaryColor, workers } = props;

	let styles = {
		backgroundColor: primaryColor,
		color: secondaryColor,
	};

	return (
		<section className="team" style={styles}>
			<h3 style={styles}>{equipo}</h3>
			<div className="workers">
				{workers.map((worker, index) => {
					return (
						worker.org === equipo && (
							<Worker key={index} {...worker} />
						)
					);
				})}
			</div>
		</section>
	);
}
