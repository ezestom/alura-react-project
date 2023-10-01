import "./Worker.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export function Worker({
	id,
	name,
	job,
	photo,
	org,
	deleteWorker,
	primaryColor,
	secondaryColor,
	fav,
	updateFav,
}) {
	const handleDelete = (id) => {
		confirm(`Desea eliminar el trabajador con id: ${id} ?`)
			? deleteWorker({
					name,
					job,
					photo,
					org,
					id,
			  })
			: alert("No se eliminó el trabajador con id: " + id + "");
	};

	console.log(name, job, photo, org, id);
	return (
		<article className="worker">
			<div className="header">
				{fav === true ? (
					<AiFillHeart
						className="btn-fav"
						onClick={() => updateFav(id)}
					/>
				) : (
					<AiOutlineHeart
						className="btn-fav"
						onClick={() => updateFav(id)}
					/>
				)}

				<AiFillCloseCircle
					className="btn-close"
					onClick={() => handleDelete(id)}
				/>
				<img
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="Foto de perfil"
				/>
			</div>
			<div className="body">
				<h4 style={{ secondaryColor }}>{name}</h4>
				<span style={{ secondaryColor }}>{job}</span>
				<span style={{ secondaryColor }}>{org}</span>
				<span>Id - {id}</span>
			</div>
		</article>
	);
}
