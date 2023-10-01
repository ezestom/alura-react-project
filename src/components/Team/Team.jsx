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
		updateFav,
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
				{workers.map((worker, index) => (
					<Worker
						key={index}
						id={worker.id}
						name={worker.name}
						job={worker.job}
						photo={worker.photo}
						org={worker.org}
						deleteWorker={deleteWorker}
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						fav={worker.fav}
						updateFav={updateFav}
					/>
				))}
			</div>
		</section>
	);
}
