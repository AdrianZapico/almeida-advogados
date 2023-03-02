import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Ligue pra gente</p>
                <p>(31)9 9741-4134</p>
                <p>Por que nós?</p>
                <p>entre em contato urgente</p>
                <button style={{backgroudColor:'green'}} className='button'>Conecte ao <a href="https://api.whatsapp.com/send?phone=3197414134"><AiOutlineWhatsApp size={20} color='green' style={{ margin: '2px' }} /></a></button>
            </div>
        </div>
    )
}

export default Hero
