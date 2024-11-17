import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useStateContext } from "../../contexts/contextProvider";
import '../logout/logout.css'

function Logout() {
    const { setToken, setUser } = useStateContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            
            await axiosClient.post('/logout');

           
            setUser(null);
            setToken(null);

            
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            
            alert('Logout failed. Please try again later.');
        }
    };

    return (
        <> <div className="logoutContainer"> <p>Vous êtes sur le point de vous déconnecter !</p>
        <button type="button" onClick={handleLogout}>déconnecter</button></div>
           
        </>
    );
}

export default Logout;
