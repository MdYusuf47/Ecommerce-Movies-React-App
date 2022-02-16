import React from 'react';
import "./Home.css";
import HomeContent from './HomeContent';
import SimpleSlider from './ImageSlider';
function MainHome() {
    return (
        <div className="home">
            <SimpleSlider />
            <HomeContent />
        </div>
    );
};

export default MainHome;
