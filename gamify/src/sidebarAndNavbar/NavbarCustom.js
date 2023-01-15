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

    return(
        <Navbar sticky="top" className="navbar" style={{fontFamily: "poppins"}}>
            <div>
                <p className="navBarTitle" style={{display: "inline", color: "white"}}>Gamify</p>
                <p className="navBarStreak" style={{display: "inline", color: "white"}}>Streak:
                    <p style={{display: "inline", color: "yellow"}}>
                        12 days
                    </p></p>
                <p className="navBarNotification" style={{display: "inline", color: "white"}}>Notifications:
                    <p style={{display: "inline", color: "red"}}>
                        3
                    </p>
                </p>
                <button className="navbarButton" onClick={logOut}> Log out</button>
            </div>
        </Navbar>
    );
}
