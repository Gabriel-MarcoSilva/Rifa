import React, { useEffect, useState } from "react";
import { getRiflles } from "../Services/api";
import Button from "../components/Button";

import "./style.css"

const Rifas = () => {

    const [riflles, setRiflles] = useState([])
    const [inputData, setInputData] = useState({})

    useEffect(() => {
        (async () => {
            const response = await getRiflles()
            setRiflles(response.data)

        })()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
        console.log(inputData)
    }

    return (
        <>
            <section className="container-rifas">
                {
                    riflles.map((rifas) => {
                        return (
                            <label className="celula" onClick={() => celula(rifas.id)} key={rifas.id}>
                                <input
                                    type="checkbox"
                                    className="select"
                                    onChange={handleChange}
                                    name="select"
                                    value={rifas.id || ""}
                                />
                                {rifas.id + 1}
                            </label>
                        )
                    })
                }
            </section>
            <Button childen="comprar" />
        </>
    )
}

function celula(props) {
    if (document.getElementsByClassName("select")[props].checked) {
        document.getElementsByClassName("celula")[props].style.background = "#970b32"
    } else {
        document.getElementsByClassName("celula")[props].style.background = "#000"
    }
}

export default Rifas