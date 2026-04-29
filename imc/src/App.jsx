import './App.css'
import ImcCalc from './components/ImcCalc'

function App() {

  return (
    <div className="container">
      <ImcCalc calcImc={calcImc}/>
    </div>
  )
}

export default App
