import React from 'react'
import './Footer.css'
import Link from 'react-scroll/modules/components/Link'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} >Sobre nós</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} >Profissionais</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="demo" spy={true} smooth={true} offset={50} duration={500} >Contato</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Site Desenvolvido por <a href="https://www.instagram.com/adrian_zapico/">@adrian_zapico <AiOutlineInstagram size={30} color='#C13584' style={{ marginTop: '10px' }}/></a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
