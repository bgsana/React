import Button from './Button'
import './BudgetTable.css'

const BudgetTable = ({data, budget, info, infoClass, urgentApplied, resetCalc}) => {
  // Verifica se a linha é a correspondente ao orçamento calculado
  const isActiveRow = (item) => {
    const budgetNumber = parseFloat(budget);
    return budgetNumber >= item.min && budgetNumber <= item.max;
  }

  return (
    <div id="result-container">
        <p className="result-item">
          <strong>Seu Orçamento:</strong> 
          <span className={`result-value ${infoClass}`}> R$ {budget} </span>
        </p>

        {/* Mostra badge de urgência se aplicado */}
        {urgentApplied && (
          <p className="result-item urgent-badge">
            <strong>⚠️ Taxa de Urgência:</strong> 
            <span>+20% aplicado</span>
          </p>
        )}
        
        <p className="result-item">
          <strong>Categoria:</strong> 
          <span className={`result-value ${infoClass}`}> {info} </span>
        </p>
        
        <p className="result-item">
          <strong>Complexidade:</strong> 
          <span className={`result-value ${infoClass}`}> {infoClass} </span>
        </p>

        <h3>Confira as classificações</h3>

        <div className='budget-table'>
            <div className='table-header'>
                <span>Faixa de Orçamento</span>
                <span>Classificação</span>
                <span>Complexidade</span>
            </div>

            {data && data.map((item, index) => (
                <div className={`table-data ${isActiveRow(item) ? 'active' : ''}`} key={index}>
                    <span>R$ {item.min} - {item.max === Infinity ? '5.001+' : item.max}</span>
                    <span>{item.classification}</span>
                    <span>{item.infoClass}</span>
                </div>
            ))}
        </div>

        <Button id="back-btn" text="Calcular Novamente" action={resetCalc} />
    </div>
  )
}

export default BudgetTable