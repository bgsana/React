import { useState } from "react";

const Data = () => {
    /* declarando var inicial */
    let valor = 10;

    /* Estado da variável monitorado pelo React */
    const [anotherNumber, setAnotherNumber] = useState(15);
    /* Monitorando uma strind (nome) */
    const [name, setName] = useState("Ana");

    return (
        <div>
            <div>
                <p>Valor: {valor}</p>
                {/* Mudando o valor da variável, mas não atualiza na tela para o user */}

                <button onClick={() => (valor = 15)}>
                    Mudar Valor
                </button>
            </div>

            <div>
                <p>Valor: {anotherNumber}</p>
                {/*  */}
                <button onClick={() => setAnotherNumber(20)}>
                    Mudar State
                </button>
            </div>

            <div>
                <p>Nome: {name}</p>
                {/*  */}
                <button onClick={() => setName("Junin")}>
                    Mudar State
                </button>
            </div>
        </div>
    )
}

export default Data