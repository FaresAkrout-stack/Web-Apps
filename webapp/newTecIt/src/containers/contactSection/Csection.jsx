import { useNavigate } from "react-router-dom";
import "../contactSection/csection.css";
import { FaRegLightbulb } from "react-icons/fa";

function Csection(){
    const navigate=useNavigate();
    const handleNav=()=>{
        navigate('/contact');
    }
    return(<> <div className='container-con'>
        <h2 className='title'> <FaRegLightbulb />  avez  Vous des questions ?</h2>
        <p>Contactez nous a l'adresse<span>  contact@newtechit.net </span> pour en savoir plus</p>
        <button className='contact-btn' onClick={handleNav}>S'informer</button>
    </div>
    </>);
}export default Csection;