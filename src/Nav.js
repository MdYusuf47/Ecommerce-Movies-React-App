import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Nav() {
    return (
        <nav className="nav_bar">
            <div className="header_left">
                <Link to="/">
                    <img className="header_logo" src="https://seeklogo.com/images/A/a-one-logo-2F669BA100-seeklogo.com.png" alt="" />
                </Link>
            </div>
            <div className="header_middle">
                <Link className="header_items" to="/">
                    <IconButton>
                        <HomeIcon style={{ color: "#ff0f8b" }} />
                    </IconButton>

                    <h1>Home</h1>
                </Link>
                <Link className="header_items" to="/shopping">
                    <IconButton>
                        <ShoppingCartIcon style={{ color: "#08ffea" }} />
                    </IconButton>

                    <h1>Shopping</h1>
                </Link>
                <Link className="header_items" to="/movies">
                    <IconButton>
                        <VideoCameraBackIcon style={{ color: "#ff001e" }} />
                    </IconButton>
                    <h1>Movies</h1>
                </Link>
            </div>
            <div className="header_right">
                <div className="search_icon header_right_items">
                    <input type="search" placeholder="Search..." />
                    <SearchIcon style={{ color: "#ffdee2" }} />
                </div>
                <Link className="header_right_items" to="">
                    <IconButton>
                        <Avatar src='http://sohagame.vcmedia.vn/public/socvui/game-vui-nhon/quan-an-cua-meo-tom/game-quan-an-cua-meo-tom.jpg' />
                    </IconButton>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
