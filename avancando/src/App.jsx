import './App.css'
import city from "./assets/city.jpg"
import Contador from './components/Contador'
import Data from './components/Data'
import DesafioExtra from './components/DesafioExtra'

function App() {

  return (
    <div className='App' style={{ paddingBottom: "500px"}}>
      <h1>Avançando no REACT</h1>
      {/* 1 - Imagem em Public */}
      <img src='/img1.jpg' alt='Imagem em Public '/>

      {/* 2 - Imagem em Assets */}
      <img src={city} alt='Imagem em Assets '/>

      {/* 3 - UseState */}
      <Data/>
      <Contador/>
      <DesafioExtra/>
    </div>
  )
}

export default App
