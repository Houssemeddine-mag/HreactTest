import "./Card.css";

export default function Button(props) {
  return (
    <button id="btn" className="Button">
      {props.name}
    </button>
  );
}

// import { useState } from "react";
// import "./Card.css";

// export default function Button(props) {
//   const [buttonName, setButtonName] = useState(props.name); // Initial name from props

//   const handleClick = () => {
//     setButtonName((prevName) => (prevName === props.name ? "houssem" : props.name));
//   };

//   return (
//     <button id="btn" className="Button" onClick={handleClick}>
//       {buttonName}
//     </button>
//   );
// }
