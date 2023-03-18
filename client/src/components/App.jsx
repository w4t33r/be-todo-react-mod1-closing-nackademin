import Navbar from "./Navbar";
import './app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/login";
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="wrap">
                    {!isAuth &&
                        <Routes>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
