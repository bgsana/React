import { useState } from "react"

const DesafioExtra = () => {
    const [num, setNum] = useState(10)

    return (
        <div>
            <div>
                <p>Valor: {num}</p>

                <button onClick={() => setNum(num + 5)}>
                    Somar +5
                </button>
                <button onClick={() => {
                    if (num > 0) {
                        setNum(num - 5)
                    } else {
                        setNum(num)
                    }
                }
                }>
                    Subtrair -5
                </button>
            </div>
        </div>
    )
}

export default DesafioExtra