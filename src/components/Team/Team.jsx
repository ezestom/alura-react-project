import { Worker } from "../Worker/Worker";
import "./Team.css";

export function Team(props) {
	const {
		equipo,
		primaryColor,
		secondaryColor,
		workers,
		deleteWorker,
		updateColor,
		fav,
	} = props;

	let styles = {
		backgroundColor: primaryColor,
		color: secondaryColor,
	};

	return (
		<section className="team" style={styles}>
			<input
				type="color"
				className="color-input"
				value={primaryColor}
				onChange={(e) => {
					updateColor(e.target.value, equipo);
				}}
			/>
			<h3 style={styles}>{equipo}</h3>
			<div className="workers">
				{workers.map((worker) => {
					return (
						worker.org === equipo && (
							<Worker
								deleteWorker={deleteWorker}
								key={worker.id}
								{...worker}
							/>
						)
					);
				})}
			</div>
		</section>
	);
}
