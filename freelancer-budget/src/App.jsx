import './App.css'
import BudgetCalc from './components/BudgetCalc'
import { useState } from 'react';
import { projetoData } from "/src/data/projetoData";
import BudgetTable from './components/BudgetTable';

function App() {
  const calcBudget = (e, rate, estimatedHours, urgent) => {
    e.preventDefault();

    // Validação: Não podem estar vazios
    if (!estimatedHours || !rate) return;

    const estimatedHoursFloat = +estimatedHours.replace(",", ".");
    const rateFloat = +rate.replace(",", ".");
    let budgetResult = (estimatedHoursFloat * rateFloat);
    
    // Aplica a taxa de urgência se necessário (+20%)
    if (urgent) {
      budgetResult = budgetResult * 1.20;
      setUrgentApplied(true);
    } else {
      setUrgentApplied(false);
    }
    
    const budgetFormatted = budgetResult.toFixed(2);
    const budgetNumber = parseFloat(budgetFormatted);

    setBudget(budgetFormatted);

    // Percorre os dados para encontrar a classificação correta
    let foundInfo = "";
    let foundInfoClass = "";
    
    projetoData.forEach((item) => {
      if (budgetNumber >= item.min && budgetNumber <= item.max) {
        foundInfo = item.classification;
        foundInfoClass = item.infoClass;
      }
    });
    
    setInfo(foundInfo);
    setInfoClass(foundInfoClass);
  }

  const resetCalc = () => {
    setBudget("");
    setInfo("");
    setInfoClass("");
    setUrgentApplied(false);
  }

  const [budget, setBudget] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const [urgentApplied, setUrgentApplied] = useState(false);

  return (
    <div className="container">
      {!budget ? (
        <BudgetCalc calcBudget={calcBudget} />
      ) : (
        <BudgetTable 
          data={projetoData} 
          budget={budget} 
          info={info} 
          infoClass={infoClass}
          urgentApplied={urgentApplied}
          resetCalc={resetCalc} 
        />
      )}
    </div>
  )
}

export default App