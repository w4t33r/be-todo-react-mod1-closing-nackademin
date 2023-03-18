import React, {useState} from "react";
import './registration.css'
import Input  from "../../uttils/Input";
const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <Input value = {email} setValue={setEmail} type="text" placeholder="Enter email"></Input>
                            <Input value = {password} setValue={setPassword} type="password" placeholder="Enter password"></Input>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Registration;