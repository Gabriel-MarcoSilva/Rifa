import React from 'react'

import "./style.css"
import Image from "../Images/QRcode.jpeg"
import { GrFormClose } from 'react-icons/gr'

const PIX = (rifa) =>{

    let valor = rifa.rifa.rifa.length * 10

    return(
        <section className="container-pix">

            <a
                className='close' 
                onClick={
                    () =>  document.getElementsByClassName("container-pix")[0].style.display = "none"
                }
            >
                < GrFormClose />
            </a>
            <h1 className="key-title-primary">Escaneie o QR code abaixo e preencha o valor:</h1>
            <span>no valor de R$ {valor},00 reais</span>
            <img src={Image} className="img-QR"/>
            <p>Jade Oliveira Cordeiro</p>

            <h2 className="key-title"> ou utilize a chave abaixo: <p className="symbol">👇</p></h2>
            <p className="chave">jade.cordeiro@yahoo.com.br</p>
        </section>
    )
}

export default PIX