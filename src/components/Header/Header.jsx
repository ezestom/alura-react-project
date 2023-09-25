import imgHeader from "../../img/Header.png";
import './Header.css'

export function Header() {
	return (
		<header className="header-container">
			<img src={imgHeader} alt="" />
		</header>
	);
}
