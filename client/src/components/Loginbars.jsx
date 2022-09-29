import react from "react";
import { useState, useContext, useEffect } from 'react';
import "./Loginbars.css";
import { Link } from "react-router-dom";

const data_users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
    { id: 3, username: "user3", password: "password3" },
    { id: 4, username: "user4", password: "password4" },
]


const Loginbars = () => {
 
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
       
        event.preventDefault();

        var { uname, pass } = document.forms[0];

      
        const userData = data_users.find((user) => user.username === uname.value);

        
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const userLink = (
        <>
        <Link to="/:userid"></Link>
        </>
    );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <Link to="/register">
                    <button className="register">Register</button>
                    </Link>
                    <div>
                    <input type="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="signIn">Sign In</div>
                {isSubmitted ? userLink : renderForm}
            </div>
        </div>
    );
}

export default Loginbars;