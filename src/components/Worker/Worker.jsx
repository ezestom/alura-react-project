import "./Worker.css";
import { AiFillCloseCircle } from "react-icons/ai";

export function Worker({ name, job, photo, org, deleteWorker }) {
	const handleDelete = () => {
		alert(`Se ha eliminado a ${name}`);
		deleteWorker(name);
	};
	return (
		<article className="worker">
			<div className="header">
			<AiFillCloseCircle className="btn-close" onClick={handleDelete} />
				<img
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="Foto de perfil"
				/>
			</div>
			<div className="body">
				<h4>{name}</h4>
				<span>{job}</span>
				<span>{org}</span>
			</div>
		</article>
	);
}
