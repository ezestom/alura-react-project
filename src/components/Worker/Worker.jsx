import './Worker.css'

export function Worker() {
	return (
		<article className="worker">
			<div className="header">
				<img
					src="https://avatars.githubusercontent.com/ezestom"
					alt="Foto de perfil"
				/>
			</div>
			<div className="body">
				<h3>Nombre</h3>
				<p>Función</p>
			</div>
		</article>
	);
}
