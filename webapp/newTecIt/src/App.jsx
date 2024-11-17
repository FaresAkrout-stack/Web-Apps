import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/HOME';

import Contact from './components/contact/CONTACT';
import Signup from './components/signup/Signup';
import Formation from './components/formation/FORMATION';
import Login from './components/login/Login';
import ACCOUNT from './components/account/ACCOUNT';
import ProtectedRoute from './rouets/protectedRoutes';
import { ContextProvider } from './contexts/contextProvider';
import Logout from './components/logout/Logout';
import Redeem from './components/redeem/Redeem';
import Platform from './components/Platform';
import EmailVerification from './components/verifaction/EmailVerification.jsx';
import DashAdmin from './components/dashAdmin/dashAdmin';

import Coupon from './components/dashAdmin/addCoupon/Coupon';
import FormationAdd from './components/dashAdmin/ajouterFormation/FormationAdd';





function App() {
  return (
    <Router>
    <ContextProvider>

        <Routes>
        <Route path="/addCoupon" element={<Coupon />} />
        <Route path="/addFormation" element={<FormationAdd />} />
        <Route path="/dashAdmin" element={<DashAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/Platform" element={<Platform />} />
          <Route path="/email/verify/:id/:hash" element={<EmailVerification />} /> 
          <Route element={<ProtectedRoute />}>
            
            <Route path="/compte" element={<ACCOUNT />} />
            <Route path='/redeem' element={<Redeem />} />
          </Route>
        </Routes>

        </ContextProvider>
    </Router>
  );
}

export default App;

