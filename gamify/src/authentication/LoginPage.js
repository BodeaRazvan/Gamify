import '../App.css';
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login as loginAction, runLogOutTimer, saveTokenToLocalStorage} from "../store/auth"
import {Navbar} from "react-bootstrap";

function LoginPage(){
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const inputRefference = useRef(null);
    const inputRefference1 = useRef(null);

    const login = () => {
      navigate("/mainPage");
    }

    const goToRegister = () => {
        navigate("/register");
    }

    return(
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily:"poppins"}}>
                <div>
                    <p className="navBarTitle" style={{display:"inline"}}>Gamify</p>
                    <button className="navbarButton" onClick={goToRegister}> Register</button>
                </div>
            </Navbar>
        <div className="App">
            <header className="myHeader">
                <h1 style={{color: "#297f8d"}}> Login </h1>
                <label style={{color: "#39b0c4"}}> Username:</label>
                <input
                    ref={inputRefference}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                />
                <label style={{color: "#39b0c4"}}> Password:</label>
                <input
                    ref={inputRefference1}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password1"
                />
                <p/>
                <button className="myButton"  onClick={login}> Login </button>
                <p/>
            </header>
        </div>
        </div>
    )
}

export default LoginPage;