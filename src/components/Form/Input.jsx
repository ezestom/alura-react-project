export function Input(data) {
	return (
		<>
			<label htmlFor="name">{data.title}</label>
			<input placeholder={data.placeholder} type="text" name="name" />
		</>
	);
}
