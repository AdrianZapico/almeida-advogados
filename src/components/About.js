import React from 'react'
import john from './images/background.png'
import './About.css'

const About = () => {

    const redirect = () => {
        window.location.href='https://www.instagram.com/chagasealmeida/'
    }

    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Sobre nós</h2>
                    <span className='line'></span>
                    <p>Nossa Missão é proporcionar sempre aos nossos clientes os melhores serviços e um atendimento personalizado pautado pelo compromisso da transparência, eficácia e eficiência.

No cenário cada vez mais dinâmico dos mercados conciliamos a segurança jurídica com a busca de resultados na aplicação de mecanismos de planejamento seja em empresas, seja a pessoas físicas. Mantendo sempre uma filosofia proativa, alicerçando nosso trabalho em três premissas: ética, agilidade e informação.

Os serviços são desenvolvidos para ajudar nossos clientes a minimizar perdas  e na tentativa de garantir a integridade física e de locomoção, além de proporcionar informações essenciais para a tranquilidade do cliente.

Prestamos os serviços com excelência e buscamos aplicar as melhores técnicas jurídicas, nos responsabilizando desde o controle e atualização processos, interposição de recursos e ações judiciais.</p>
                    <p>Somos a CHAGAS&ALMEIDA estamos prontos para lhe servir   ⚖️</p>
                    <button onClick={()=>redirect()} className='button'>Saiba Mais</button>
                </div>
            </div>
        </div>
    )
}

export default About
