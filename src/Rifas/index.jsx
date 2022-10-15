import React, { useEffect, useState } from "react";
import { getRiflles } from "../Services/api";
import Contato from "../Contato";

import "./style.css"

const Rifas = () => {

    const [riflles, setRiflles] = useState([])
    const [checked, setChecked] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getRiflles()
            setRiflles(response.data)
        })()
    }, [])

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, Number(event.target.value) + 1];
        } else {
            updatedList.splice(checked.indexOf(Number(event.target.value) + 1), 1);
        }
        setChecked(updatedList);
    };

    return (
        <>
            <Contato rifa={checked} />
            <section className="container-rifas">
                {
                    riflles.map((rifas) => {
                        return (
                            <label className="celula" onClick={() => celula(rifas.id)} key={rifas.id}>
                                <input
                                    type="checkbox"
                                    className="select"
                                    onChange={handleCheck}
                                    name="select"
                                    value={rifas.id || ""}
                                />
                                {rifas.id + 1}
                            </label>
                        )
                    })
                }
            </section>
            <button onClick={() => chamar()} >comprar</button>
        </>
    )
}
function chamar() {
    document.getElementsByClassName("container-contato")[0].style.display = "flex"
}

function celula(props) {

    if (document.getElementsByClassName("select")[props].checked) {
        document.getElementsByClassName("celula")[props].style.background = "#970b32"
    } else {
        document.getElementsByClassName("celula")[props].style.background = "#000"
    }
}

export default Rifas