import { useState } from "react";
import "./Input.css";

export function Input(props) {
	const [input, setInput] = useState("");

	const handleInput = (event) => {
		event.preventDefault();
		props.setInput(event.target.value);
	};

	return (
		<>
			<label htmlFor="name">{props.title}</label>
			<input
				placeholder={props.placeholder}
				type="text"
				value={props.input}
				required={props.required}
				onChange={handleInput}
			/>
		</>
	);
}
