import './App.css'
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header/>
      <Main/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App