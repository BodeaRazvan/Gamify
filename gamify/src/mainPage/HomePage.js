import '../App.css';
import '../index.css';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {useNavigate} from "react-router";
import React from "react";


function HomePage() {
    let navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToRegister = () => {
        navigate('/register');
    }
    return(
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily:"poppins"}}>

            </Navbar>
            <header className="myHeader" style={{fontFamily:"poppins"}}>
                <h1 style={{color: "#653862"}}> Gamify It </h1>
                <div className="App" style={{color: "#1f616c"}}>
                    All the quizzes in the world
                </div>
                <p style={{marginBottom:"1.5em"}}/>
                <div>
                    <Link to="/login" style={{textDecoration:"none", display:"inline"}} >
                        <button className={"myButton"}> Login </button>
                    </Link>
                    <Link to="/register" style={{textDecoration:"none",display:"inline",marginLeft:"100px"}}>
                        <button className={"myButton"}> Register </button>
                    </Link>
                </div>
                <p style={{marginBottom:"5em"}}/>
            </header>


        </div>
    );
}

export default HomePage;