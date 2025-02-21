import "./Header.css";

export default function Header() {
  return (
    <div id="head">
      <h3 id="title">Application</h3>
      <div className="header">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">About</a>
      </div>
    </div>
  );
}
