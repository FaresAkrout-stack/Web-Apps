import React from 'react';
import Navbar from '../../containers/navbar/Navbar';
import './contact.css';
import Footer from "../../containers/footer/Footer.jsx";
import { IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { useRef}from 'react';
import emailjs from '@emailjs/browser';
import logo from '../../assets/logo.png';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const tel=document.getElementById('tel').value;
        const email=document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          showAlert('L\'adresse e-mail n\'est pas valide.');
          return; 
        }
        if (isNaN(tel)) {
          showAlert('Le numéro de téléphone doit être un nombre.');
          return; 
        }
    
        emailjs
        .sendForm('service_y6aw69z', 'template_ttjun49', form.current, '9yIqebe4unH2Zxy0J')
        .then(
          () => {
            console.log('SUCCESS!');
            showAlert('Votre message a été envoyé');
          },
          (error) => {
            console.log('FAILED...', error.text);
            showAlert('Vous devez vérifier les champs');
          }
        );
        
      e.target.reset();
  };
  const showAlert = (message) => {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

    
    return (
        <>
             <Navbar logo={logo} Acceuil='Acceuil' Compte='Compte Client' Formation='Formation' Contact='Contact' btn='Rejoignez-nous' Sinscrire="S'inscrire" SeConnecter='se connecter' />
            
            <h1 id='title'>Contacter Nous</h1>
            <div className="contact-container">
           
                
                <div className='contact-information'>
                    <h2>Contact information</h2>
                    <div className='contacts'>
                    <p id='a'><LuPhoneCall /> +216 21 618 110</p>
                    <p id='b'><IoMailOutline /> contact@newtechit.net</p>
                    <p id='c'><IoLocationOutline /> Centre Urbain Nord, Immeuble tamayouz , Bureau C3, 3éme Etage - 1082 Tunis</p>
                    </div> 
                    </div>
               <div className='contact-form'>
                <form ref={form}onSubmit={sendEmail}>
                    <input type='text' placeholder='Nom' id='name' name='name'  required/>
                    <input type='text' placeholder='Prenom' id='prenom'name='prenom'required />
                    <input type='text' placeholder='Telephone ' id='tel'name='tel' required/>
                    <input type="email" placeholder='E-mail' id='email'name='email'required />
                    <input type="text" placeholder='Sujet' id='sujet'name='sujet' required/>
                    <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Votre Message'required ></textarea>
                    <button type='submit'>ENVOYER</button>
                    </form>
               </div>
            </div>
            <Footer />
        </>
    );}


export default Contact;
