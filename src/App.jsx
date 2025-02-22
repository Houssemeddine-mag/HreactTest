import Header from "./Header";
import Footer from "./footer";
import Card from "./card";

function App() {
  return (
    <div>
      <Header />
      <Card imagename="image 1" 
      />
      <Card imagename="image 2"/>
      <Card imagename="image 3"/>
      <Card imagename="image 4"/>
      <Footer />
    </div>
  );
}
export default App;
