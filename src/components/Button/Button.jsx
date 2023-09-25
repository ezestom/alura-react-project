import './Button.css'

export function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}