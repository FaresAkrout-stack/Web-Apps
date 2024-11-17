import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../dashAdmin/dashAdmin.css'; 

function DashAdmin() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    navigate('/logout');
  }

  const handleAddFormation = () => {
    navigate('/addFormation');
  };

  const handleAddCoupon = () => {
    navigate('/addCoupon');
  };

  return (
    <div className="dashAdmin-container">
      <h2 className="dashAdmin-title">Dashboard Admin</h2>
     
      <div className="dashAdmin-buttons">
        <button className="dashAdmin-button" onClick={handleAddFormation}>Add Formation</button>
        <button className="dashAdmin-button" onClick={handleAddCoupon}>Add Coupon</button>
        <button className="dashAdmin-button" onClick={handleLogout}>deconnecter</button>
      </div>
    </div>
  );
}

export default DashAdmin;
