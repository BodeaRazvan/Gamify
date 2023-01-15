import '../App.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Navbar} from "react-bootstrap";

function RegisterPage(){
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const register = () => {
        navigate("/mainPage");
    }

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily:"poppins"}}>
                <div>
                    <p className="navBarTitle" style={{display:"inline"}}>Gamify</p>
                    <button className="navbarButton" onClick={goToLogin}> Login</button>
                </div>
            </Navbar>
        <div className="App">
            <header className="myHeader">
                <h1> Register </h1>
                <label> Username:</label>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                />
                <label> Email:</label>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
                <label> Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
                <label> Repeat password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword1(e.target.value)}
                    id="password1"
                />
                <label> Address:</label>
                <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                />
                <p/>
                <button className="myButton" onClick={register}> Register </button>
                <p/>
            </header>
        </div>
        </div>
    );
}

export default RegisterPage;