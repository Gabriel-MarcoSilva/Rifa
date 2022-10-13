import React from 'react';
import Photos from '../Photos';

import "./style.css"

const Content = () => {
    return (
        <>
            <section className='container-Content'>
                <h1 className='title-Content'>Descrição: </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero incidunt molestiae aliquid nesciunt, cumque consectetur quidem aspernatur
                    reiciendis aut accusantium vitae blanditiis. Ipsam ipsa laudantium, sequi perspiciatis
                    ullam expedita. Sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem porro veritatis eum quidem quam, distinctio temporibus fugit, perferendis, tenetur aliquam aut repellendus culpa. Ullam quisquam voluptatibus sit architecto accusantium.
                </p>
            </section>
            <Photos />
        </>
    )
}

export default Content