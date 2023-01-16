import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useState} from "react";
import './StatsPage.css';
function StatsPage() {

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


            <ProSidebar style={{
                marginTop: 48,
                position: "fixed",
                fontFamily: "poppins",
                sticky: "top",
                width: "150px",
                minWidth: "150px",
                fontSize: "20px",
            }} className="mySideBar">
                <Menu iconShape="square">
                    <MenuItem onClick={() => {navigate("/profile")}}>My Profile</MenuItem>
                    <SubMenu title="My Avatar">
                        <MenuItem onClick={() => navigate("/avatar")}> Create/Edit</MenuItem>
                    </SubMenu>
                    <SubMenu title="Streak">
                        <MenuItem onClick={() => {}}> 12 days</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>

            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <div className="rectangularsContainer">
                        <h1 style={{color: "white"}}> Your stats </h1>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>
                                Quizzes taken: 24 <br/>
                                Most played category:  Science
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Contests Won: 5</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#ff9100"}}>
                                Courses Taken: 12 <br/>
                                Courses in progress: 2
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#ff9100"}}>Number of friends: 17</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Number of button clicks: 567</div>
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Your average quiz score is in our top 5% </div>
                        </div>

                        <h1 style={{color: "white"}}> Keep up the good work! </h1>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default StatsPage;