import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";

import Draggable from "react-draggable";


function UserProfile() {
    const trophy1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262082888994856/T1.png"
    const trophy2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084868706394/T2.png"
    const trophy3 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084663197696/T3.png"
    const trophy4 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084411543562/T4.png"
    const trophy5 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084143091835/T5.png"
    const trophy6 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083874672751/T6.png"
    const trophy7 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083622998186/T7.png"
    const trophy8 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083333603348/T8.png"
    const trophy9 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083115503626/T9.png"

    const [isDragging, setIsDragging] = React.useState(false);
    const [trophyImage,setTrophyImage] = React.useState(0);

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
                    <MenuItem onClick={() => {navigate("/mainPage")}}>Main Page</MenuItem>
                    <SubMenu title="My Avatar">
                        <MenuItem onClick={() => navigate("/avatar")}> Create/Edit</MenuItem>
                    </SubMenu>
                    <SubMenu title="Trophies">
                        <MenuItem style={{maxHeight:"400px", overflow:"auto"}}>
                                <Draggable>
                                <img onClick={() => {localStorage.setItem('trophy',1);window.location.reload()}} src={trophy1} alt="trophy1" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img onClick={() => {localStorage.setItem('trophy',2);window.location.reload()}} src={trophy2} alt="trophy2" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',3);window.location.reload()}} src={trophy3} alt="trophy3" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',4);window.location.reload()}} src={trophy4} alt="trophy4" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img onClick={() => {localStorage.setItem('trophy',5);window.location.reload()}} src={trophy5} alt="trophy5" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',6);window.location.reload()}} src={trophy6} alt="trophy6" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',7);window.location.reload()}} src={trophy7} alt="trophy7" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',8);window.location.reload()}} src={trophy8} alt="trophy8" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                                <br/>
                                <Draggable>
                                <img  onClick={() => {localStorage.setItem('trophy',9);window.location.reload()}} src={trophy9} alt="trophy9" style={{width: "50px", height: "80px"}}/>
                                </Draggable>
                        </MenuItem>

                    </SubMenu>
                    <SubMenu title="Stats" onClick={() => {navigate("/stats")}}>
                    </SubMenu>
                    <SubMenu title="Streak">
                        <MenuItem onClick={() => {}}> 12 days </MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>


            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <div style={{position:"absolute", top:"10%", right:"53%"}}>
                      <GenerateAvatar/>
                    </div>
                    Profile page
                </header>
            </div>
        </div>
    );
}

export default UserProfile;