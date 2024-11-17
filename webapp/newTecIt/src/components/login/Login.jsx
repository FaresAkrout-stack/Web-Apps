import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient'; // Assuming axiosClient is correctly configured
import { useStateContext } from '../../contexts/contextProvider'; // Adjust path as necessary
import '../../components/login/login.css';
import Navbar from '../../containers/navbar/Navbar.jsx';

function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useStateContext();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
  
    try {
      const response = await axiosClient.post('/login', payload);
      const { data } = response;
  
      setUser(data.user);
      setToken(data.token);

      if (data.user.usrName === 'NTADMIN') {
        navigate('/dashAdmin');
      } else {
        navigate('/');
      } 
      
    } catch (err) {
      console.error('An error occurred:', err.response.data);
      showAlert('Vous devez vérifier vos coordonnées');
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
      <Navbar Acceuil='Acceuil' Formation='Formation' Contact='Contact' compte='Compte client' Sinscrire="S'inscrire" />
      <div className="login">
        <form className="form-con" onSubmit={handleSubmit}>
          <h1>Connectez-vous à votre compte</h1>
          <input type="email" ref={emailRef} name="email" id="email" placeholder="E-mail" required />
          <input type="password" ref={passRef} name="password" id="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
          <p>Vous n'avez pas de compte ? <Link to="/register">S'inscrire ici</Link></p>
        </form>
      </div>
    </>
  );
}

export default Login;
