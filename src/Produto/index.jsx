import React from "react";
import "./style.css"
import Image from "../Images/photo1.jpeg"
import Image2 from "../Images/photo2.jpeg"
import Image3 from "../Images/photo3.jpeg"

import { RiInstagramLine, RiMailLine } from "react-icons/ri"

var img = document.createElement('img');

img.setAttribute('className', 'trocar')

function trocarImages(props) {
    if (props == 0) {
        img.setAttribute("src", Image)
    }
    if (props == 1) {
        img.setAttribute("src", Image2)
    }
    if (props == 2) {
        img.setAttribute("src", Image3)
    }
    document.getElementsByClassName("exposicao")[0].innerHTML = ""
    document.getElementsByClassName("exposicao")[0].appendChild(img)
}

const Produto = () => {
    return (
        <section className="container-produto">
            <div className="container-produto-image flexColum">
                <h1>Camisa </h1>
                <section className="exposicao flexColum">
                    <img src={Image} />
                </section>
                <section className="images-prod-icons" >
                    <p onClick={() => trocarImages(0)}><img src={Image} /> </p>
                    <p onClick={() => trocarImages(1)}><img src={Image2} /> </p>
                    <p onClick={() => trocarImages(2)}><img src={Image3} /> </p>
                </section>
            </div>
            <div className="container-compra flexColum">
                <section className="venda flexColum">
                    <section className="valor-produto"> Valor R$ 10,00 </section>
                    <section className="info-representante">Representante: <br /> Jade Oliveira Cordeiro <br /> (75) 98871-8531 </section>
                    <section className="redes-contato">
                        <p>Redes sociais:</p>
                        <a className="container-icons" href="https://www.instagram.com/ieee.rasufrb/">
                            <RiInstagramLine className="iconsIni icons" />
                        </a>
                        <a className="container-icons" href="mailto:ieeerasufrb@gmail.com">
                            <RiMailLine className="iconsIni icons" />
                        </a>
                    </section>

                </section>
            </div>
        </section>
    )
}

export default Produto