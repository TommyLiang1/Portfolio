import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Theme />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
