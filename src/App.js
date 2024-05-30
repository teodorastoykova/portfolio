import "./App.css";
import MyNavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills/>
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
