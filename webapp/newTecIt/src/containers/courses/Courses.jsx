import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import axiosClient from '../../api/axiosClient';

function Courses({ idF, categorie, date, duree, prix, description, capacite }) {
    const [showAlert, setShowAlert] = useState(false);
    const [formationPrice, setFormationPrice] = useState(0);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({ point: 0 });

    const fetchUserPoints = async (courseId) => {
        try {
            const response = await axiosClient.get(`/getUser/${courseId}`);
            setUser({ point: response.data.data.point || 0 });
        } catch (error) {
            console.error('Error fetching user points:', error.response ? error.response.data : error.message);
        }
    };

    const handleEnrollClick = (courseId) => {
        const course = { idF, name, date, duree, prix, description, capacite };

        if (!course) {
            console.error(`Course with id ${courseId} not found`);
            return;
        }

        if (course.capacite >= 15) {
            setErrorMessage("Capacité trop élevée pour s'inscrire !");
            return;
        }

        setFormationPrice(course.prix);
        setShowAlert(true);
        fetchUserPoints(courseId);
        setSelectedCourseId(courseId);
    };

    const handleConfirmEnroll = () => {
        if (user.point >= formationPrice) {
            axiosClient.post(`/enroll/${selectedCourseId}`, { prix: formationPrice })
                .then(response => {
                    const { success, message } = response.data;
                    if (success) {
                        window.location.href = '/platform'; 
                    } else {
                        setErrorMessage(message);
                    }
                    setShowAlert(false);
                })
                .catch(error => {
                    console.error('Error enrolling:', error.response ? error.response.data : error.message);
                    setShowAlert(false);
                });
        } else {
            setErrorMessage("Tu n'as pas assez de points !");
            setShowAlert(false);
        }
    };

    return (
        <div className="formation-wrapper">
            <header>{categorie}</header>
            <div className="formation-content">
                <aside>Date: {date}</aside>
                <aside>Durée: {duree} jours</aside>
                <aside>Prix: {prix}</aside>
                <p>{description}</p>
                <p id="capacite">{capacite} /15 <IoPerson /></p>
                <button type="button" onClick={() => handleEnrollClick(idF)}>Inscrivez !</button>

                {showAlert && (
                    <div className="enroll-alert">
                        <p>Vous êtes sur le point de dépenser {formationPrice} points</p>
                        <button onClick={handleConfirmEnroll} style={{ marginRight: "3%" }}>Confirmer</button>
                        <button onClick={() => setShowAlert(false)}>Fermer</button>
                    </div>
                )}

                {errorMessage && (
                    <div className="error-message">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Courses;
