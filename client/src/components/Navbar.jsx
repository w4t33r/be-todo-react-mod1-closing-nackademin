import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__header">Backend_1_todoapp</div>
                {!isAuth &&<div className="navbar__login"><NavLink to="/login"> login </NavLink></div>}
                {!isAuth &&<div className="navbar__reg"><NavLink to="/registration"> registration </NavLink></div>}
                {isAuth &&<div className="navbar__reg"><NavLink to="/registration"> exit </NavLink></div>}
            </div>
        </div>






    );
};

export default Navbar;