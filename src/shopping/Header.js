import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <div className="header_logo">
                    <h3>shopping</h3>
                </div>
            </Link>
            <div className="header_nav">
                <Link to="" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
