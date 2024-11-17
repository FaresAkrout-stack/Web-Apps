import React, { useEffect, useState, useRef } from 'react';
import Navbar from "../../containers/navbar/Navbar.jsx";
import axiosClient from "../../api/axiosClient.js";
import { useParams } from 'react-router-dom';
import '../account/account.css';
import tkn from '../../assets/tkn.png';
import { Link } from 'react-router-dom';

function ACCOUNT() {
    const { id } = useParams();
    const usrNameRef = useRef(null);
    const emailRef = useRef(null);
    const societeRef = useRef(null);

    const [user, setUser] = useState({
        usrName: '',
        email: '',
        societe: '',
        point: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
          
        const fetchUser = async () => {
            try {
                const response = await axiosClient.get(`/show/${id}`);
                setUser({
                    usrName: response.data.data.usrName,
                    email: response.data.data.email,
                    societe: response.data.data.societe || '',
                    point: response.data.data.point || 0,
                });
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = {};

        if (usrNameRef.current.value !== user.usrName) {
            updatedUser.usrName = usrNameRef.current.value;
        }
        if (emailRef.current.value !== user.email) {
            updatedUser.email = emailRef.current.value;
        }
        if (societeRef.current.value !== user.societe) {
            updatedUser.societe = societeRef.current.value;
        }

        if (Object.keys(updatedUser).length === 0) {
            showAlert('pas de changement');
            return;
        }

        try {
            const response = await axiosClient.put(`/update/${id}`, updatedUser);
            setUser({
                ...user,
                ...response.data.data,
            });
            showAlert('Utilisateur mis à jour avec succès');
        } catch (err) {
            setError(err);
            showAlert('Erreur lors de la mise à jour de l\'utilisateur');
        }
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Navbar Acceuil='Acceuil' Compte='Compte Client' Formation='Formation' Contact='Contact' />

            <div className="account-wrapper">
                <form className="accountform-container" onSubmit={handleUpdate}>
                    <div className='pointToken'>
                        <span id="point"> VOTRE SOLDE EST : {user.point}<img src={tkn} alt="token" /></span>
                    </div>
                    <div className="accountform-group">
                        <h1>Mettre à jour le compte</h1>
                        <input ref={usrNameRef} type="text" name="usrName" id="usrName" defaultValue={user.usrName} />
                    </div>
                    <div className="accountform-group">
                        <input ref={emailRef} type="email" name="email" id="email" defaultValue={user.email} />
                    </div>
                    <div className="accountform-group">
                        <input ref={societeRef} type="text" name="societe" id="societe" defaultValue={user.societe} />
                    </div>
                    <Link to='/redeem'>Réclamer Point Maintenant</Link>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </>
    );
}

export default ACCOUNT;
