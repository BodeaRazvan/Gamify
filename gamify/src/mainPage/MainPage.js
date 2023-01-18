import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import 'react-pro-sidebar/dist/css/styles.css';
import React, {useEffect} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";
import SidebarMainPage from "../sidebarAndNavbar/SidebarMainPage";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";


function MainPage() {

    return(
        <div>
            <NavbarCustom/>
            <SidebarMainPage/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <div className="mainPage">
                        <GenerateAvatar/>
                    </div>

                </header>
            </div>
        </div>
    );
}

export default MainPage;