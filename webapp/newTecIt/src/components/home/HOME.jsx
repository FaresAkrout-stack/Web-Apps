
import React from "react"; 
import '../home/home.css';
import Csection from "../../containers/contactSection/Csection.jsx";
import Navbar from "../../containers/navbar/Navbar.jsx";
import Header from "../../containers/header/Header.jsx";
import Produit from "../../containers/liste-produit/Produit.jsx";
import Footer from "../../containers/footer/Footer.jsx";
import Carousel from "../../containers/carousel/Carousel.jsx";
import Map from "../../containers/map/Map.jsx";

import Card from "../../containers/card/Card.jsx";
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import { FaHandshake } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";



function Home() {
    
    return (
        <>
            <Navbar  Acceuil='Acceuil' Compte='Compte Client' Formation='Formation' Contact='Contact'  Sinscrire="S'inscrire" SeConnecter='Se Connecter' logout='deconnecter' />
                
              
            <Header />
                 
            <Produit />

            <Carousel > 
                <Card img={c1} title='Approche Pratique' icon={<FaHandshake />}  description="Dans les LABs pratiques pour expérience d'apprentissage immersive."/>
                <Card img={c2} title='Formateurs Experts' icon={<GrUserExpert />} description="Instructeurs certifies avec une vaste expérience du terrain."/>
                <Card img={c3} title='Certifications' icon={<GrCertificate />} description="Preparez-vous et obtenez des certifications reconnues dans l'industrie."/>
                <Card img={c4} title=' Support continu' icon={<GiNotebook />} description="Accès à des ressources et assistance même après la formation."/>


                </Carousel>

                <Csection />
                
                <Map />

            
            <Footer />
        </>
    );
}

export default Home;