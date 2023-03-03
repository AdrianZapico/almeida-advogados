import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpeg'
import './Profissionais.css'

const Profissionais = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Profissionais</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} style={{width:'80px',height:'80px'}} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>Director of "Financial Times"</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
              
                </div>
            </div>
        </div>
    )
}

export default Profissionais
