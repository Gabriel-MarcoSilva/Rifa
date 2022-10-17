import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { GrFormClose } from 'react-icons/gr'
import PIX from "../PIX"
import { api } from "../Services/api";

import "./style.css"

let prosseguir = false;

const Contato = (rifa) => {

    const [number, setNumber] = useState([])
    const [dados, setDados] = useState({})
    const [customer, setCustomer] = useState({})


    useEffect(() => {

        (async () => {
            setNumber([rifa.rifa]);
            setDados({ idRaffle: 4, numbers: rifa.rifa })
        })()

    }, [rifa.rifa.length])


    function visivel() {

        if (
            rifa.rifa.length > 0 &&
            document.getElementsByName("name")[0].value != '' &&
            document.getElementsByName("phoneNumber")[0].value != ''
        ) {
            prosseguir = true
            return prosseguir
        } else {
            prosseguir = false
            return prosseguir
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log('submit')

        api.post("http://localhost:8080/billingNumber", dados)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleInputChange = (e) => {

        const { name, value } = e.target
        setCustomer({ ...customer, [name]: value })
        setDados({ ...dados, customer })

        console.log(dados)

    }

    return (
        <div className='container-contato'>

            {visivel() ? <PIX rifa={rifa} /> : ""}

            <a
                className='close'
                onClick={
                    () => document.getElementsByClassName("container-contato")[0].style.display = "none"
                }
            >
                < GrFormClose />
            </a>
            <h1 className="key-title-primary">Preencha as informações abaixo</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label className="container-contato-label">
                    <p>Nome: </p>
                    <input onChange={handleInputChange} type="text" className="p_input" name="name" />

                </label>
                <label className="container-contato-label">
                    <p>Telefone: </p>
                    <input onChange={handleInputChange} type="number" className="p_input" name="phoneNumber" />

                </label>
                <label>
                    <input onChange={handleInputChange} type="text" value={number || ""} name="numbers" className="p_input numbers" />
                </label>

                {rifa.rifa.length > 0 ? <span className="span"> <p className="title-number">Rifas selecionadas:</p> <p className="number" >{rifa.rifa + " "} </p></span> : " "}


                <label className='container-button'>
                    <button onClick={() => pagamento()}> Confirmar</button>
                </label>
            </form>
        </div>
    )
}

function pagamento() {
    if (prosseguir) {
        document.getElementsByClassName("container-pix")[0].style.display = "flex"
    }
}
export default Contato