import '../../containers/header/header.css';
import { IoGiftOutline } from "react-icons/io5";
import bg from '../../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/contextProvider';
function Header(){
    const navigate=useNavigate();
    const { token } = useStateContext();
    const handleBtn=()=>{
        navigate('/register');
    }
    return(<>
        <div className='nav-bg'>
            <img src={bg} alt="bg" />

        

        <p id='p1'>Programme de <span>Fidélité </span>et <span>Formations</span></p>
     <p id='p2'>Accumulez des <span>Avantages</span>, <span>Développez</span> vos<span> Compétences</span>. </p></div>
     
     { !token &&(
        <div className='btn-container'>
     <button className='register-btn' onClick={handleBtn}>Rejoignez-nous</button></div>)}
     <div className="header-container" style={{ marginTop: '25%' }}>
        <h2><IoGiftOutline />  Points-Cadeaux pour Formations </h2>   <br />
        <p>Notre programme de fidélité vous récompense à chaque achat avec des points-cadeaux. Accumulez-les pour bénéficier d'une formation gratuite. C'est notre manière de reconnaître votre fidélité et de favoriser le développement de vos compétences professionnelles </p>
        
        
        </div></>);
}export default Header;