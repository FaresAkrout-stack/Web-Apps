import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../containers/navbar/navbar.css';
import logo from '../../assets/whitelogo.png';
import { useStateContext } from '../../contexts/contextProvider';

function Navbar(props) {
    const { token, user } = useStateContext();
    const [scrolled, setScrolled] = useState(false);
    const [isSlidebarVisible, setIsSlidebarVisible] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showSlidebar = () => {
        setIsSlidebarVisible(true);
    };

    const hideSlidebar = () => {
        setIsSlidebarVisible(false);
    };

    return (
        <>
            <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <img src={logo} alt="logo" className='title' />
                <ul>
                    <li className='hideonphone'><Link to="/">{props.Acceuil}</Link></li>
                    <li className='hideonphone'><Link to={'/compte'}>{props.Compte}</Link></li>
                    <li className='hideonphone'><Link to="/formation">{props.Formation}</Link></li>
                    <li className='hideonphone'><Link to="/contact">{props.Contact}</Link></li>
                    {!token ? (<>
                            <li className='hideonphone' id='signup'><Link to="/register">{props.Sinscrire}</Link></li>
                            <li className='hideonphone' id='login'><Link to="/login">{props.SeConnecter}</Link></li>
                            </> ):
                    <li className='hideonphone' ><Link to="/logout">{props.logout}</Link></li>
                    }

                    <li className='menu' onClick={showSlidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </li>
                </ul>
            </div>
            {isSlidebarVisible && (
                <div className='slidebar'>
                    <ul>
                        <li onClick={hideSlidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </li>
                        <li><Link to="/">{props.Acceuil}</Link></li>
                        <li><Link to={'/compte'}>{props.Compte}</Link></li>
                        <li><Link to="/formation">{props.Formation}</Link></li>
                        <li><Link to="/contact">{props.Contact}</Link></li>
                        {!token ? (
                            <>
                                <li id='signup'><Link to="/register">{props.Sinscrire}</Link></li>
                                <li id='login'><Link to="/login">{props.SeConnecter}</Link></li>
                            </>
                        ) : (
                            <li><Link >{props.logout}</Link></li>
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
