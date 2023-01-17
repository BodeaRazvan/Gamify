import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";


function MainPage() {


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
                    <SubMenu title="Profile" onClick={() => navigate("/profile")}>
                    </SubMenu>
                    <SubMenu title="Games">
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","1");navigate("/chooseCourseSubject")}}> Classic Quiz</MenuItem>
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","2");navigate("/chooseCourseSubject")}}> Approximate</MenuItem>
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","3");navigate("/chooseCourseSubject")}}> Columns</MenuItem>
                        <MenuItem onClick={() => {localStorage.setItem("gameOption","4");navigate("/chooseCourseSubject")}}> Drag & Drop</MenuItem>
                        <MenuItem onClick={() => {navigate("/createQuiz")}}> Create Quiz</MenuItem>
                    </SubMenu>
                    <SubMenu title="Courses" onClick={() => {localStorage.setItem("gameOption","5");navigate("/chooseCourseSubject")}}>
                    </SubMenu>
                    <SubMenu title="Contest" onClick={() => navigate("/contest")}>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                   <GenerateAvatar/>
                    Main Page
                </header>
            </div>
        </div>
    );
}

export default MainPage;