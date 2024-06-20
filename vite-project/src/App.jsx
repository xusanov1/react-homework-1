import './App.css'
import Nav from './components/header/Nav.jsx'
import Intro from './components/intro/Intro.jsx';
import Featured  from "./components/featured page/Featured.jsx";
import Beached from "./components/beached/Beached.jsx";
import Pathway from "./components/pathway/Pathway.jsx";
import Incredible from "./components/Incredible/Incredible.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
      <div className='App'>
        <Nav/>
        <Intro/>
        <Featured/>
        <Beached/>
        <Pathway/>
        <Incredible/>
        <Footer/>

      </div>
  
  )
}

export default App
