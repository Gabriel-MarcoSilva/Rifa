import Reacta from 'react'
import Button from '../components/Button'
import { GrFormClose } from 'react-icons/gr'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import PIX from "../PIX"
import * as yup from "yup";

const schema = yup.object({
    responsableNumber: yup.number().required("preencha o campo corretamente"),
    responsable: yup.string().required("preencha o campo corretamente"),
    numbers: yup.string().required("escolha algum número")
}).required();

import "./style.css"

const Contato = (rifa) => {

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
            <PIX rifa={rifa} />

            <a
                className='close'
                onClick={
                    () => document.getElementsByClassName("container-contato")[0].style.display = "none"
                }
            >
                < GrFormClose />
            </a>
            <h1>Preencha as informações abaixo</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label className="container-contato-label">
                    <p>Nome: </p>
                    <input type="text" className="p_input" name="responsable" {...register("responsable")} />
                    <p className="message">{errors.responsable?.message}</p>
                </label>
                <label className="container-contato-label">
                    <p>Telefone: </p>
                    <input type="number" className="p_input" name="responsableNumber" {...register("responsableNumber")} />
                    <p className="message">{errors.responsableNumber?.message}</p>
                </label>
                <label>
                    <input type="text" value={rifa.rifa || ""} name="numbers" className="p_input numbers"  {...register("numbers")} />
                </label>

                {rifa.rifa.length > 0 ? <span className="span"> <p>Rifas selecionadas:</p> <p className="number" >{rifa.rifa + " "} </p></span> : " "}
                <p className="message">{errors.numbers?.message}</p>

                <label className='container-button'>
                    <button onClick={() => pagamento()}> Confirmar</button>
                </label>
            </form>
        </div>
    )
}


function pagamento() {
    document.getElementsByClassName("container-pix")[0].style.display = "flex"
}
export default Contato