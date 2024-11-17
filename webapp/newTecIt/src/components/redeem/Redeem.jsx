import React, { useState } from 'react';
import Navbar from '../../containers/navbar/Navbar';
import axiosClient from '../../api/axiosClient';
import './redeem.css';
import { useParams } from 'react-router-dom';

function Redeem() {
    const { id } = useParams(); 
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try {
            const response = await axiosClient.post(`/redeem/${id}`, {
                code,
            });
            
            showAlert('reclamation affecte');
        } catch (error) {
            showAlert('Erreur lors de la réclamation de points ! ');
           
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
            <Navbar Acceuil='Acceuil' Compte='Compte Client' Formation='Formation' Contact='Contact' />
            <div className="signup-wrapper">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1 id="tit">Réclamer Points!</h1>
                    <input
                        type="text"
                        name="code"
                        id="code"
                        placeholder="Saisir votre code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button type="submit">Réclamer</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );

}
export default Redeem;
