import '../../containers/card/card.css';
import { FaReact } from 'react-icons/fa';

function Card(props){
    return(<>
        <div className="card-container">
            <img src={props.img} alt="img" />
            <div className="icon-container">
                    {props.icon}
                </div>
                
            <h2 className="entete">{props.title}</h2>
            <p className="description">{ props.description}</p>
        </div>
    
    </>);

}
export default Card;