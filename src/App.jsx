import Header from "./Header";
import Card from "./card";
import Blank from "./blank";

function App() {
  return (
    <div>
      <Header />
      <Blank/>
      <Card imagename="image 1"/>
      <Card imagename="image 2"/>
      <Card imagename="image 3"/>
      <Card imagename="image 4"/>
      <Card imagename="image 5"/>
    </div>
  );
}
export default App;
