import React,{ useRef, useState } from 'react'
import './Demo.css'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import Iframe from 'react-iframe'
import emailjs from "@emailjs/browser";

//Z7c6Q-0jac59XLisC
//template_3hw6ila
//service_rw7hjfc


const Demo = () => {
    
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
         "service_rw7hjfc",
          "template_3hw6ila",
          {
            from_name: form.name,
            to_name: "Chagas Almeida",
            from_email: form.email,
            to_email: "chagasalmeidadevelop@gmail.com",
            message: form.message,
          },
          "Z7c6Q-0jac59XLisC"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
    
    
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
            
                <div
     id="form-main"
    >
    <div id="form-div">
        

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form" id="form1"
        >
        <p className="name">
          <label >
            <span >Nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome..."
              className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="name"              
          />
          </label>
          </p>
          <p className="email">
          <label >
            <span >Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email..."
              className="validate[required,custom[email]] feedback-input" id="email"
           />
          </label>
          </p>
          <label >
            <span >Mensagem</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Conte aqui do que precisa...'
              className="validate[required,length[6,300]] feedback-input" id="comment" 
            />
          </label>

          <button
            type='submit'
            className='button' 
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

      
        
     
    </div>
    </div>
            </div>

        </div>
    )
}

export default Demo
