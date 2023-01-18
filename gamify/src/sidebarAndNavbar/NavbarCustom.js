import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {Navbar} from "react-bootstrap";

export default function NavbarCustom() {

    let navigate = useNavigate();

    const logOut = () => {
        navigate('/');
    }

    const goToStreakPage = () => {
        navigate('/streak');
    }

    return(
        <Navbar sticky="top" className="navbar" style={{fontFamily: "poppins"}}>
            <div>
                <p className="navBarTitle" style={{display: "inline", color: "white"}}>Gamify</p>
                <p className="navBarStreak" style={{display: "inline", color: "white",  cursor: "pointer"}} onClick={goToStreakPage}>Streak:
                    <p style={{display: "inline", color: "#F5EA5A",  cursor: "pointer"}} onClick={goToStreakPage}>
                        12 days
                    </p></p>
                <button className="navbarButton" onClick={logOut}> Log out</button>
            </div>
        </Navbar>
    );
}
