import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Ligue pra gente</p>
                <p>(xx)x xxxx-xxxx</p>
                <p>Por que nós?</p>
                <p>entre em contato urgente</p>
                <button style={{backgroudColor:'green'}} href='/' className='button'>Conecte ao <FaWhatsapp style={{margin:'0px 0px 0px 30px'}}/></button>
            </div>
        </div>
    )
}

export default Hero
