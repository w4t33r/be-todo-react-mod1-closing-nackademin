import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__header">Backend_1_todoapp</div>
                <div className="navbar__login">login</div>
                <div className="navbar__reg">registration</div>
            </div>
        </div>
    );
};

export default Navbar;