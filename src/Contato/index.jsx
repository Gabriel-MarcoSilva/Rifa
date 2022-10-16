import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { GrFormClose } from 'react-icons/gr'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import PIX from "../PIX"
import * as yup from "yup";

const schema = yup.object({
    phoneNumber: yup.number().required("preencha o campo corretamente"),
    name: yup.string().required("preencha o campo corretamente"),
    numbers: yup.string().required("escolha algum número")
}).required();

import "./style.css"

let prosseguir = false;

const Contato = (rifa) => {

    const [number, setNumber] = useState([])

    function visivel(){
        useEffect(() => {

            (async () => {
                setNumber([rifa.rifa]);
            })()
    
        }, [rifa.rifa.length])

        console.log(number)

        if(
            rifa.rifa.length > 0 &&
            document.getElementsByName("name")[0].value != '' &&
            document.getElementsByName("phoneNumber")[0].value != ''
        ){
            prosseguir = true
            return prosseguir
        }else{
            prosseguir = false
            return prosseguir
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitForm = data => console.log(data);
    /*const onSubmitForm = data => fetch("http://localhost:8080/", {
        method: "POST",
        body: JSON.stringify({
            data
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });*/

    return (
        <div className='container-contato'>
            
            {visivel() ? <PIX rifa={rifa} /> : ""  }

            <a
                className='close'
                onClick={
                    () => document.getElementsByClassName("container-contato")[0].style.display = "none"
                }
            >
                < GrFormClose />
            </a>
            <h1 className="key-title-primary">Preencha as informações abaixo</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label className="container-contato-label">
                    <p>Nome: </p>
                    <input type="text" className="p_input" name="name" {...register("name")} />
                    <p className="message">{errors.name?.message}</p>
                </label>
                <label className="container-contato-label">
                    <p>Telefone: </p>
                    <input type="number" className="p_input" name="phoneNumber" {...register("phoneNumber")} />
                    <p className="message">{errors.phoneNumber?.message}</p>
                </label>
                <label>
                    <input type="text" value={rifa.rifa || ""} name="numbers" className="p_input numbers"  {...register("numbers")} />
                </label>

                {rifa.rifa.length > 0 ? <span className="span"> <p className="title-number">Rifas selecionadas:</p> <p className="number" >{rifa.rifa + " "} </p></span> : " "}
                <p className="message">{errors.numbers?.message}</p>

                <label className='container-button'>
                    <button onClick={() => pagamento()}> Confirmar</button>
                </label>
            </form>
        </div>
    )
}

function pagamento() {
    if(prosseguir){
        document.getElementsByClassName("container-pix")[0].style.display = "flex"
    }
}
export default Contato