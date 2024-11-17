import '../../containers/map/map.css';
import map from '../../assets/map.png';
import { FaLocationDot } from "react-icons/fa6";
function Map(){
    return(<>
        <div className="map-conatianer">
            <h2>  <FaLocationDot /> Où nous trouver</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7094762098454!2d10.195500111522273!3d36.84943337211725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c5fdc1366f%3A0x8e6e80bd11a41145!2sNewTech%20IT!5e0!3m2!1sen!2stn!4v1718227805132!5m2!1sen!2stn"  style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>);
}export default Map;