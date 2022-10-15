import React, { useState } from 'react'
import Button from '../components/Button'
import { GrFormClose } from 'react-icons/gr'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  responsableNumber: yup.number().required("preencha o campo corretamente").min(10),
  responsable: yup.string().required("preencha o campo corretamente"),
}).required();

import "./style.css"

const Contato = (rifa) =>{

    const [inputData, setInputData] = useState();

    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmitForm = data => console.log(data);
    /*const onSubmitForm = data => fetch("http://localhost:8080/", {
        method: "POST",
        body: JSON.stringify({
            data
        }),
        headers:{
            'Content-type': 'aplication/json; charset-UTF-8'
        }
    })
    .then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err))*/

    console.log(inputData)
    
    return(
        <div className='container-contato'>
            <a
                className='close' 
                onClick={
                    () =>  document.getElementsByClassName("container-contato")[0].style.display = "none"
                }
            >
                < GrFormClose />
            </a>
            <h1>Preencha as informações abaixo</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label className="container-contato-label">
                    <p>Nome: </p>
                    <input type = "text" className="p_input" name="responsable" {...register("responsable")} />
                    <p>{errors.responsable?.message}</p>
                </label>
                
                <label className="container-contato-label">
                    <p>Telefone: </p>
                    <input type = "number" className="p_input" name="responsableNumber" {...register("responsableNumber")}/>
                    <p>{errors.responsableNumber?.message}</p>
                </label>

                {rifa.rifa.length > 0 ? <span className="span"> <p>Rifas selecionadas:</p> <p>{rifa.rifa + " "}</p> </span> : " "}
                
                <label className='container-button'>
                    <Button childen="confirmar"/>
                </label>
            </form>
        </div>
    )
}

export default Contato