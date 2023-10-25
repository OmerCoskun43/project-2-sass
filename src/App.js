import Header from "./components/Header";
import "./scss/App.scss";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />

      <Card key={data.id} data={data} />
      <Footer />
    </div>
  );
}

export default App;
