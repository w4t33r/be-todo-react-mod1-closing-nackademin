import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__header">Backend_1_todoapp</div>
                <div className="navbar__login"><NavLink to="/login"> login </NavLink></div>
                <div className="navbar__reg"><NavLink to="/registration"> registration </NavLink></div>
            </div>
        </div>






    );
};

export default Navbar;