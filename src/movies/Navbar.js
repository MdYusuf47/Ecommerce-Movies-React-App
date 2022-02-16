import React, { useState, useEffect } from 'react'
import "./Navbar.css";
function Navbar() {
    const [show, handelShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        } else {
            handelShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img className="nav_avatar" src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt="" />
            </div>
        </div>
    )
}

export default Navbar
