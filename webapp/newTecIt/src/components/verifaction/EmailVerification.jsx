import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import '../verifaction/verification.css'

const EmailVerification = () => {
    const { id, hash } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axiosClient.get(`/email/verify/${id}/${hash}`)
            .then(response => {
                alert(response.data.message);
                navigate('/login');
            })
            .catch(error => {
                console.error('Verification error:', error.response.data);
            });
    }, [id, hash, navigate]);
    
    return (
        <>
            <div id='mailSec'>
                S'il vous plaît, vérifiez votre email.
            </div>
            <div id='Secmail'>
                Mail déjà vérifié? 
                <Link to='/login'>Aller à la page de connexion</Link>
            </div>
        </>
    );
};

export default EmailVerification;
