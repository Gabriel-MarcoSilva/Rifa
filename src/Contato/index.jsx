import React from 'react'
import Button from '../components/Button'

import "./style.css"

const Contato = () =>{

    const handleSubmit = () =>{

    }
    
    return(
        <div className='container-contato'>
            <a
                className='close' 
                onClick={
                    () =>  document.getElementsByClassName("container-contato")[0].style.display = "none"
                }
            >
                x
            </a>
            <h1>Preencha as informações abaixo</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Nome: </p>
                    <input type = "text" className="p_input" name="name" />
                </label>
                <label>
                    <p>Email: </p>
                    <input type = "email" className="p_input" name="email" />
                </label>
                <label>
                    <p>Telefone: </p>
                    <input type = "Number" className="p_input" name="tel" />
                </label>

                <label className='button'>
                    <Button childen="confirmar"/>
                </label>
            </form>
        </div>
    )
}

export default Contato