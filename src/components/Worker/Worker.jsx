import './Worker.css'

export function Worker({ name, job, photo, org}) {
	return (
		<article className="worker">
			<div className="header">
				<img
					src={photo}
					alt="Foto de perfil"
				/>
			</div>
			<div className="body">
				<h4>{name}</h4>
				<p>{job}</p>
				<p>{org}</p>
				
			</div>
		</article>
	);
}
