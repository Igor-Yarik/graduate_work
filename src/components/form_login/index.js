import React from "react";
import './styles.css'
import logo from '../../images/logo.svg'

const FormLogin = () => {
    return (
        <div className="form_login">
            <img className="form_login_img" src={logo} alt="logo_images"></img>
            <form className="form_login_items">
                <input className="form_login_item" type="text" placeholder="User Name"></input>
                <input className="form_login_item" type="password" placeholder="Password"></input>
                <button className="form_login_btn">Login</button>
            </form>
        </div>

    )
}

export default FormLogin;