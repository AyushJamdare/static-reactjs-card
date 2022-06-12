import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./styles/Style.scss"

function App() {
  return (
    <div className="App">
      <div class="card">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
