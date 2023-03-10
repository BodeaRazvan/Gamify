import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


export default function ChoiceOfContestants() {

    const [globalIsClicked, setGlobalIsClicked] = useState(false);
    const [inviteFriendsIsClicked, setInviteFriendsIsClicked] = useState(false);
    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage= () => {
        if(globalIsClicked){
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

    return(
        <div>
           <NavbarCustom/>
           <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h2> {subject} </h2>
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