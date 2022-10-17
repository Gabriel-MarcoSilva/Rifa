import React, { useEffect, useState } from "react";
import { getRiflles } from "../Services/api";
import Contato from "../Contato";

import "./style.css"

const Rifas = () => {

    const [riflles, setRiflles] = useState([])
    const [rifa, setRifa] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getRiflles()
            setRiflles(response.data.numbers)
        })()
    }, [])

    const handleCheck = (event) => {
        var updatedList = [...rifa];
        if (event.target.checked) {
            updatedList = [...rifa, Number(event.target.value)];
        } else {
            updatedList.splice(rifa.indexOf(Number(event.target.value)), 1);
        }
        setRifa(updatedList);
    };

    return (
        <>
            <Contato rifa={rifa} />
            <section className="container-rifas">
                {
                    riflles.map((rifas) => {
                        return (
                            <>
                                {customer(rifas, handleCheck)}
                            </>
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

function customer(rifas, handleCheck) {
    if (rifas.customer) {

        return (
            <label className="celula" onClick={() => celula(rifas.number, rifas)} key={rifas.id} style={{ background: "yellow", color: "#000" }}>
                <input
                    type="checkbox"
                    className="select"
                    onChange={handleCheck}
                    name="select"
                    value={rifas.number || ""}
                />
                {rifas.number}
            </label>
        )
    } else {
        return (
            <label className="celula" onClick={() => celula(rifas.number, rifas)} key={rifas.id} >
                <input
                    type="checkbox"
                    className="select"
                    onChange={handleCheck}
                    name="select"
                    value={rifas.number || ""}
                />
                {rifas.number}
            </label>
        )
    }
}
function celula(props) {

    props -= 1;
    if (document.getElementsByClassName("select")[props].checked) {
        document.getElementsByClassName("celula")[props].style.background = "#970b32"
    } else {
        document.getElementsByClassName("celula")[props].style.background = "#000"
    }

}

export default Rifas