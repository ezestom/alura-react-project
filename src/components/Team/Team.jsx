import { Worker } from "../Worker/Worker";
import "./Team.css";

export function Team(props) {
	const { equipo, primaryColor, secondaryColor, workers, deleteWorker } =
		props;

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
					console.log(e.target.value);
				}}
			/>
			<h3 style={styles}>{equipo}</h3>
			<div className="workers">
				{workers.map((worker, index) => {
					return (
						worker.org === equipo && (
							<Worker
								deleteWorker={deleteWorker}
								key={index}
								{...worker}
							/>
						)
					);
				})}
			</div>
		</section>
	);
}
