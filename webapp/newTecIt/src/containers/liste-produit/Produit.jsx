import React from 'react';
import '../../containers/liste-produit/produit.css';
import veam from '../../assets/veam.jpg';
import fortinet from '../../assets/ff.png';
import hillstone from '../../assets/hills.webp';
import vmware from '../../assets/v.png';
import ac from '../../assets/active.png';
import ex from '../../assets/ex.webp';
import ar from '../../assets/aruba.png';
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiVeeam } from "react-icons/si";
import { SiFortinet } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";
import { GrVmware } from "react-icons/gr";
import { SiMicrosoftexchange } from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { GrAruba } from "react-icons/gr";






function Produit() {
    return (<>
        <h1><MdProductionQuantityLimits />   Nos Produits</h1>
        <div className="container">
            <div className="content right-image">
                <div className="text">
                    <h2>01 <SiVeeam /> </h2>
                    <h3>Veeam</h3>
                    <p>
                    Assurez la protection de vos données avec nos cours Sur les solutions de sauvegarde et de récupération Veeam.
                    </p>
                </div>
               <img src={veam} alt="Community Outreach" />
            </div>
            <div className="content left-image">
                <img src={fortinet} alt="Entrepreneurship Development" />
                <div className="text">
                    <h2>02 <SiFortinet /></h2>
                    <h3>Fortinet</h3>
                    <p>
                    Renforcez la sécurité de votre réseau grâce à notre formation sur les pare-feux Fortinet.
                    </p>
                </div>
            </div>
            <div className="content right-image">
                <div className="text">
                    <h2>03 <IoIosGitNetwork /></h2>
                    <h3>Hillstone</h3>
                    <p>
                    Développez vos compétences en sécurité réseau avec nos cours sur les pare-feux Hillstone.
                    </p>
                </div>
                <img src={hillstone} alt="Personal Growth" />
            </div>
            <div className="content left-image">
                <img src={vmware} alt="Health and Wellness" />
                <div className="text">
                    <h2>04 <GrVmware /></h2>
                    <h3>Vmware</h3>
                    <p>
                    Découvrez les bases de la virtualisation et devenez un expert en gestion infrastructures Virtuelles.
                    </p>
                </div>
            </div>
            <div className="content right-image">
                <div className="text">
                    <h2>05 <SiMicrosoftexchange /></h2>
                    <h3>Exchange</h3>
                    <p>
                    Maîtrisez la messagerie d &#39;entreprise grâce à notre formation complète sur Microsoft
Exchange. Apprenez à configurer, gérer et optimiser vos serveurs de messagerie pour une
performance maximale. Devenez un expert en sécurité et en administration de votre
environnement Exchange
                    </p>
                </div>
                <img src={ex} alt="Educational Support" />
            </div>
            <div className="content left-image">
                <img src={ac} alt="Environmental Initiatives" />
                <div className="text">
                    <h2>06 <FaLock /></h2>
                    <h3> Active Directory</h3>
                    <p>
                    Maîtrisez Active Directory et garantissez la sécurité de votre réseau d&#39;entreprises. Cette
formation vous permettra de gérer les utilisateurs, les groupes et les ordinateurs, de mettre
en place des politiques de sécurité robustes et d&#39;optimiser l&#39;accès aux ressources et aux
applications. Devenez un expert en administration, Active Directory.             </p>
                </div>
            </div>
            <div className="content right-image">
                <div className="text">
                    <h2>07 <GrAruba /></h2>
                    <h3>Aruba</h3>
                    <p>
                    Maîtrisez la performance et la sécurité de vos réseaux sans fil grâce à notre formation sur
les solutions Aruba. Apprenez à configurer et gérer des réseaux Wi-Fi de pointe pour
répondre aux exigences de votre entreprise. Développez vos compétences pour garantir une
connectivité fiable et sécurisée.            </p>
                </div>
                <img src={ar} alt="Cultural Programs" />
            </div>
        </div>
        </> );
}

export default Produit;

