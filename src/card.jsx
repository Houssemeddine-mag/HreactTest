import "./Card.css";
import Button from "./button";

export default function card() {
  return (
    <div className="card">
      <img id="img" src="https://placehold.co/150" alt="thid id an image"></img>
      <h2>Random img</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        odit totam, laudantium tempore praesentium porro optio doloremque
        aspernatur? Harum beatae eaque repellendus quos voluptatibus quidem nemo
        numquam fugiat eos illo!
      </p>
      <Button />
    </div>
  );
}
