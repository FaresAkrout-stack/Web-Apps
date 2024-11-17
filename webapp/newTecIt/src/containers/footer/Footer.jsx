import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import '../footer/Footer.css';
import logo from '../../assets/whitelogo.png';
function Footer(){
    const currentYear = new Date().getFullYear();

   
    
     

    return(<> 
    <div className="footer-container">
        <img src={logo} alt="logo" />
        
        <p>Centre Urbain Nord | Immeuble tamayouz | Bureau C3 | 3éme Etage - 1082 Tunis</p>
        <h3 className="mail">  <IoIosMail />   contact@newtechit.net</h3>
        <h3>  <FaPhoneAlt />    +216  21 618 110</h3>
        <p className="copyright">© {currentYear} NewTecIt  All rights reserved.</p>
    </div>
    </>);
}export default Footer;