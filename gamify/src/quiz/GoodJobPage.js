import '../App.css';
import '../index.css';
import './ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarCustom from "../sidebarAndNavbar/SidebarCustom";
import GenerateAvatar from "../avatar/GenerateAvatar";


function GoodJobPage() {
    const trophy1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262082888994856/T1.png"
    const confetti = "https://media.giphy.com/media/VdidEvq6v8z8eNOldF/giphy.gif";

    let navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToRegister = () => {
        navigate('/register');
    }

    const logOut = () => {
        navigate('/');
    }

    return(
        <div className="background-confetti">
            <NavbarCustom/>
            <SidebarCustom/>

            <div className="App" style={{fontFamily: "poppins"}}>
                <br />
                <br/>
                <header className="myHeader">
                    <GenerateAvatar/>
                    <h2>Congratulations, you earned a trophy!</h2>
                    <h3>Your score: 2/3</h3>
                    <img src={trophy1} alt="trophy1" style={{width: "100px", height: "100px"}}/>
                    <img src={confetti} alt="confetti" style={{width: "100%", height: "50%"}}/>


                </header>
            </div>

        </div>
    );
}

export default GoodJobPage;