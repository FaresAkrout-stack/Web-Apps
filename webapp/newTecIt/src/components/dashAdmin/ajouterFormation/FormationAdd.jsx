import React, { useState } from 'react';
import axiosClient from '../../../api/axiosClient';
import { useNavigate } from 'react-router-dom';
import './formationadd.css'; // Import your custom CSS file for styling

const AddFormationForm = () => {
    const [categorie, setCategorie] = useState('');
    const [prix, setPrix] = useState('');
    const [duree, setDuree] = useState('');
    const [dateSession, setDateSession] = useState('');
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/dashAdmin');
    };

    const capacite = 0; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post('/formations', {
                categorie,
                prix: parseFloat(prix),
                duree,
                dateSession,
                capacite,
            });

            console.log('Formation created:', response.data);
            showAlert('Formation ajoutée');

            // Clear form fields after successful submission
            setCategorie('');
            setPrix('');
            setDuree('');
            setDateSession('');

        } catch (error) {
            console.error('Error creating formation:', error.response.data);
            showAlert('La formation existe déjà');
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
        <div className="addfcontainer">
            <div className="addfform-container">
                <h2>Ajout des Formations</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="categorie">Categorie:</label>
                    <input type="text" id="categorie" className="form-input" value={categorie} onChange={(e) => setCategorie(e.target.value)} required />

                    <label htmlFor="prix">Prix:</label>
                    <input type="number" id="prix" className="form-input" value={prix} onChange={(e) => setPrix(e.target.value)} required />

                    <label htmlFor="duree">Duree:</label>
                    <input type="text" id="duree" className="form-input" value={duree} onChange={(e) => setDuree(e.target.value)} required />

                    <label htmlFor="dateSession">Date Session:</label>
                    <input type="date" id="dateSession" className="form-input" value={dateSession} onChange={(e) => setDateSession(e.target.value)} required />

                    <button type="submit" className="submit-button">Ajouter</button>
                    <button type="button" onClick={handleNavigation}className="submit-button" >Menu</button>
                </form>
            </div>
        </div>
    );
};

export default AddFormationForm;
