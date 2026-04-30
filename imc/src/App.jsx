import './App.css'
import ImcCalc from './components/ImcCalc'
import Button from './components/Button'
import { useState } from 'react';
import { data } from "./data/data";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault(); // Previne o recarregamento da página

    // Validação: Não podem estar vazios
    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(2);

    setImc(imcResult);

    // Percorre os dados para encontrar a classifição correta
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  }
  
  const resetCalc = () =>{
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");


  return (
    <div className="container">
      <ImcCalc calcImc={calcImc} />
    </div>
  )
}

export default App
