import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";


export default function ChoiceOfContestants() {

    const [globalIsClicked, setGlobalIsClicked] = useState(false);
    const [inviteFriendsIsClicked, setInviteFriendsIsClicked] = useState(false);
    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage= () => {
        if(globalIsClicked){
            //localStorage.setItem("numberOfContestants", JSON.stringify(0));
            navigate('/waitingForPeople');
        } else if (inviteFriendsIsClicked){
            navigate('/chooseFriends');
        } else {
            setErrorActivated(true);
        }
    }

    const handleSelection = (event) => {
        localStorage.setItem("contestMode", JSON.stringify(event.target.value));
        if(event.target.value === "Global"){
            setGlobalIsClicked(true);
            setInviteFriendsIsClicked(false);
        } else if (event.target.value === "Invite friends"){
            setGlobalIsClicked(false);
            setInviteFriendsIsClicked(true);
        }
    }

    const goBack = () => {
        navigate('/contest');
    }

    const logOut = () => {
        navigate('/');
    }

    return(
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily: "poppins"}}>
                <div>
                    <p className="navBarTitle" style={{display: "inline", color: "white"}}>EnergX</p>
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
                    <SubMenu title="Games">
                        <MenuItem onClick={() => navigate("/admin/users")}> Classic quiz</MenuItem>
                        <MenuItem onClick={() => {}}> Drag & Drop</MenuItem>
                    </SubMenu>
                    <SubMenu title="Courses">
                        <MenuItem onClick={() => navigate("/admin/devices")}> English</MenuItem>
                        <MenuItem onClick={() => {}}> IT</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> {subject} </h1>
                    <button className={globalIsClicked ? "subject-button-clicked" : "subject-button"} value={"Global"} onClick={handleSelection}> Global </button>
                    <label style={{margin: 10}}> or </label>
                    <button className={inviteFriendsIsClicked ? "subject-button-clicked" : "subject-button"} value={"Invite friends"} onClick={handleSelection}> Invite friends </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> You have to choose a play mode </label>
                        : null
                    }
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back </button>
                        <button className="next-button" onClick={goToNextPage}> Next </button>
                    </div>
                </header>
            </div>
        </div>
    );
}