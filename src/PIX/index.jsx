import React from 'react'

import "./style.css"
import Image from "../Images/QRcode.png"
import { GrFormClose } from 'react-icons/gr'


const PIX = (rifa) =>{

    let valor = rifa.rifa.rifa.length * 5
    console.log(rifa.rifa.rifa.length)
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
            <h1>Scanei o QR code abaixo:</h1>
            <span>no valor de R$ {valor},00 reais</span>
            <img src={Image} className="img-QR"/>
            <h1> ou utilize a chave abaixo</h1>
            <p className="chave">chave pix</p>
        </section>
    )
}

export default PIX