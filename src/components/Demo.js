import React from 'react'
import './Demo.css'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import Iframe from 'react-iframe'

const Demo = () => {
    
    
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Mais de 100 clientes satisfeitos</p>
                    <p>Uma Filosofia...</p>
                    <p>Cada um de nossos clientes recebe o melhor atendimento de acordo com a filosofia da CHAGAS&ALMEIDA. Você, nosso futuro cliente é nossa prioridade!</p>
                    <a href="https://api.whatsapp.com/send?phone=3197414134"><button className='button' style={{marginLeft:'130px'}}>Venha fazer uma consulta!</button></a>

                    <div className="social-icons">

                        <a href='https://www.instagram.com/chagasealmeida/'><AiOutlineInstagram size={30} color='#C13584' style={{ margin: '20px' }} /></a>
                        <AiOutlineFacebook size={30} color='blue' style={{ margin: '20px' }} />
                        <a href="https://api.whatsapp.com/send?phone=3197414134"><AiOutlineWhatsApp size={30} color='green' style={{ margin: '20px' }} /></a>
                        <AiOutlineYoutube size={30} color='red' style={{ margin: '20px' }} />

                    </div>
                </div>
                <div className='col-2'>

      
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8070818229685!2d-43.80928340968138!3d-19.89036644174075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69d4096409f07%3A0x3aa2f82ad6b68569!2sR.%20do%20Carmo%2C%204%20-%20Centro%2C%20Sabar%C3%A1%20-%20MG%2C%2034505-460!5e0!3m2!1spt-PT!2sbr!4v1677754008216!5m2!1spt-PT!2sbr"
                        width="570px"
                        height="320px"
                        id=""
                        className=""
                        display="block"
                        position="relative" />
                </div>
            </div>
        </div>
    )
}

export default Demo
