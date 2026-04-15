import { useState } from "react"

const Contador = () => {
    const[number, setNumber] = useState(0)

  return (
    <div>
        <div>
            <p>Contagem: {number}</p>

            <button onClick={() => setNumber(number + 1)}>
                Somar +1
            </button>

        </div>
    </div>
  )
}

export default Contador