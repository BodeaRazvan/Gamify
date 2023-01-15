import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";


function UserProfile() {
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
                    <MenuItem onClick={() => {}}>Menu</MenuItem>
                    <SubMenu title="My Avatar">
                        <MenuItem onClick={() => navigate("/avatar")}> Create/Edit</MenuItem>
                    </SubMenu>
                    <SubMenu title="Trophies">
                        <MenuItem onClick={() => navigate("/admin/users")}> Trophy1 </MenuItem>
                        <MenuItem onClick={() => navigate("/admin/users")}> Trophy2 </MenuItem>
                    </SubMenu>
                    <SubMenu title="Stats">
                    </SubMenu>
                    <SubMenu title="Streak">
                    </SubMenu>
                </Menu>
            </ProSidebar>


            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <GenerateAvatar/>
                    Profile page
                </header>
            </div>
        </div>
    );
}

export default UserProfile;