import "./Card.css";

export default function Button(props) {
  return (
    <div>
      <button className="Button">{props.name}</button>
    </div>
  );
}
