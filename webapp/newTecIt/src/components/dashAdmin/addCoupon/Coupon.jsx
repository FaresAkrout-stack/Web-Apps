import React, { useState } from 'react';
import axiosClient from '../../../api/axiosClient';
import { useNavigate } from 'react-router-dom';
import './coupon.css'; // Import your custom CSS file for styling

const AddCouponForm = () => {
    const [code, setCode] = useState('');
    const [prixAchat, setPrixAchat] = useState('');
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/dashAdmin');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post('/coupons', {
                code,
                prixAchat: parseFloat(prixAchat),
            });

            console.log('Coupon created:', response.data);

            setCode('');
            setPrixAchat('');
            showAlert('Code ajouté');

        } catch (error) {
            console.error('Error creating coupon:', error.response.data);
            showAlert('Le code existe déjà');
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
        <div className="coupContainer">
            <div className="coupform-container">
                <h2>Ajout de Coupon</h2>
                <form onSubmit={handleSubmit}>
                    <div className="coupform-group">
                        <label htmlFor="code">Code:</label>
                        <input
                            type="text"
                            id="code"
                            className="form-input"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="coupform-group">
                        <label htmlFor="prixAchat">Prix Achat:</label>
                        <input
                            type="number"
                            id="prixAchat"
                            className="form-input"
                            value={prixAchat}
                            onChange={(e) => setPrixAchat(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Ajouter
                    </button>

                    <button type="button" onClick={handleNavigation}className="submit-button">
                        Menu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCouponForm;
