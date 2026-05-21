import { useState } from "react";
import "./BudgetCalc.css"
import Button from "./Button";

const BudgetCalc = ({ calcBudget }) => {
    const [rate, setRate] = useState("");
    const [estimatedHours, setEstimatedHours] = useState("");
    const [urgent, setUrgent] = useState(false); // Novo estado para urgência

    const clearForms = (e) => {
        e.preventDefault();
        setRate("");
        setEstimatedHours("");
        setUrgent(false); // Limpa também a urgência
    }

    const validDigits = (text) => {
         return text.replace(/[^0-9,]/g, "")
    }

    const handlerateChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setRate(updateValue);
    }

    const handleestimatedHoursChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setEstimatedHours(updateValue);
    }

    const handleUrgentChange = (e) => {
        setUrgent(e.target.checked);
    }
    
    const handleCalculate = (e) => {
        console.log("Calculando com:", {rate, estimatedHours, urgent});
        calcBudget(e, rate, estimatedHours, urgent); // Passa urgência
    }

  return (
    <div id="calc-container">
      <h2>Calculadora de Orçamento</h2>
        <form id="budget-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="rate">Valor da Hora (R$)</label>
                    <input type="text"
                           name="rate"
                           id="rate"
                           placeholder="Ex: 50"
                           onChange={handlerateChange}
                           value={rate} />
                </div>
                <div className="form-control">
                    <label htmlFor="estimatedHours">Estimativa de Horas do Projeto</label>
                    <input type="text"
                           name="estimatedHours"
                           id="estimatedHours"
                           placeholder="Ex: 40"
                           onChange={handleestimatedHoursChange}
                           value={estimatedHours} />
                </div>
                
                {/* Novo campo de urgência */}
                <div className="form-control checkbox-control">
                    <label className="checkbox-label">
                        <input 
                            type="checkbox"
                            checked={urgent}
                            onChange={handleUrgentChange}
                        />
                        <span>Projeto Urgente (+20%)</span>
                    </label>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={handleCalculate}/>
                <Button id="clear-btn" text="Limpar" action={clearForms}/>
            </div>
        </form>
    </div>
  );
};

export default BudgetCalc;