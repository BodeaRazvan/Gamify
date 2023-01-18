import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useState} from "react";
import './StatsPage.css';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";
function StatsPage() {
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
        <div>
            <NavbarCustom/>
            <SidebarProfile/>

            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <div className="rectangularsContainer" style={{position: 'relative'}}>
                        <h1 style={{color: "#ffd500"}}> Your stats </h1>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#c880de"}}>
                                Quizzes taken: 24 <br/>
                                Most played category:  Science
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#c880de"}}>Contests Won: 5</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#ef9e33"}}>
                                Courses Taken: 12 <br/>
                                Courses in progress: 2
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#ef9e33"}}>Number of friends: 17</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#c880de"}}>Number of button clicks: 567</div>
                            <div className="rectangular" style={{backgroundColor: "#c880de"}}>Your average quiz score is in our top 5% </div>
                        </div>
                        <h1 style={{color: "#ffd500"}}> Keep up the good work! </h1>
                    </div>
                    <img src={confetti} alt="confetti" style={{width: "100%", height: "50%", position: 'absolute'}}/>
                </header>
            </div>
        </div>
    );
}

export default StatsPage;