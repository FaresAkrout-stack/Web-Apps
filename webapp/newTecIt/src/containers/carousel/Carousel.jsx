import React, { useState, useEffect } from 'react';
import '../../containers/carousel/carousel.css';
import logo from '../../assets/logo.png';

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth =28; 

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % children.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((currentIndex - 1 + children.length) % children.length);
    };

    const calculateTransform = () => {
        return `translateX(-${currentIndex * cardWidth}%)`;
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000); 
        return () => clearInterval(intervalId);
    }, [currentIndex, children.length]);

    return (
        <div className="carousel">
            <div className="carousel-wrapper" style={{ width: `${(children.length + 1) * cardWidth}%`, transform: calculateTransform() }}>
                {children.map((child, index) => (
                    <div key={index} className="slide" style={{ width: `${cardWidth}%` }}>
                        {child}
                    </div>
                ))}
              
                <div className="slide" style={{ width: `${cardWidth}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '10px' }} /> 
                    
                </div>
            </div>
            <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <button className="next" onClick={goToNextSlide}>&#10095;</button>
        </div>
    );
};

export default Carousel;
