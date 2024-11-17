import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../components/signup/signup.css';
import Navbar from "../../containers/navbar/Navbar.jsx";
import axiosClient from '../../api/axiosClient';
import { useStateContext } from '../../contexts/contextProvider';


function Signup() {
  const navigate = useNavigate(); // Move useNavigate inside the functional component
  const { setUser, setToken } = useStateContext(); // M

  // Refs for form fields
  const usrNameRef = useRef(null);
  const emailRef = useRef(null);
  
  const societeRef = useRef(null);
  const passRef = useRef(null);
  const passcRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!emailRegex.test(emailRef.current.value)) {
      showAlert('Vous devez vérifier votre email');
      return;
    }
    if (!passRegex.test(passRef.current.value)) {
      showAlert('Le mot de passe doit comporter une majuscule, un numéro et un symbole avec longeur minimale de 7 ');
      return;
    }
    if (passRef.current.value !== passcRef.current.value) {
      showAlert('Les mots de passe ne sont pas identiques');
      return;
    }
    

    const payload = {
      usrName: usrNameRef.current.value,
      email: emailRef.current.value,
      societe: societeRef.current.value,
      pass: passRef.current.value,
      passc: passcRef.current.value,
    };
    
    try {
      const response = await axiosClient.post('/register', payload);

      // Handle success response
      const { data } = response;
      setUser(data.user);
      setToken(data.token);
      
      showAlert('Compte créé avec succès');
      navigate('/email/verify/:id/:hash');
    } catch (err) {
      console.error('An error occurred:', err.response.data); // Log the response data to see the validation errors
      showAlert('vous avez deja un compte'); // Display error message from backend
    }
  };

  function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
  return (
    <>
      <div className="signup-wrapper">
        <Navbar Acceuil='Acceuil' Formation='Formation' Contact='Contact' SeConnecter='se connecter' />
        <form className="form-container" onSubmit={handleSubmit} method='POST'>
          <h1>Créez votre compte</h1>
          <input ref={usrNameRef} type="text" name="usrName" id="usrName" placeholder="Nom d'utilisateur" required />
          <input ref={emailRef} type="email" name="email" id="email" placeholder="E-mail" required />
         
          <input ref={societeRef} type="text" name="societe" id="societe" placeholder="Nom de société" />
          <input ref={passRef} type="password" name="pass" id="pass" placeholder="Mot de passe" required />
          <input ref={passcRef} type="password" name="passc" id="passc" placeholder="Vérifier mot de passe" required />
          <button type="submit">S'inscrire</button>
          <p>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></p>
        </form>
      </div>
    </>
  );
}

export default Signup;
