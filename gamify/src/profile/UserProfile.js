import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";

import Draggable from "react-draggable";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";


function UserProfile() {

    const [isDragging, setIsDragging] = React.useState(false);
    const [trophyImage,setTrophyImage] = React.useState(0);

    return(
        <div>
            <NavbarCustom/>
            <SidebarProfile/>
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