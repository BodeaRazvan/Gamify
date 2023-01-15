import '../App.css';
import '../index.css';
import './Contest.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {useState} from "react";
import { Dot } from 'react-animated-dots';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarCustom from "../sidebarAndNavbar/SidebarCustom";


export default function WaitingForPeople() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [contestMode] = useState(JSON.parse(localStorage.getItem("contestMode")));
    const [errorActivated, setErrorActivated] = useState(false);
    const [noOfContestants, setNoOfContestants] = useState(0);

    let navigate = useNavigate();

    const startGame = () => {
        if(noOfContestants >= 2){
            navigate('/contestGettingReady');
        } else {
            setErrorActivated(true);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNoOfContestants(noOfContestants + 1)
            localStorage.setItem("numberOfPlayers", JSON.stringify(noOfContestants + 1));
            if(noOfContestants > 8){
                navigate('/contestGettingReady');
            }
        },2000);
        return () => clearInterval(interval);
    }, [noOfContestants]);

    const goBack = () => {
        if(contestMode === "Global"){
            navigate('/choiceOfContestants');
        } else if(contestMode === "Invite friends"){
            navigate('/chooseFriends');
        }
    }

    return(
        <div>
            <NavbarCustom/>
            <SidebarCustom/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> {subject} </h1>
                    <label>
                        <label style={{margin: 10}}>Waiting for others to join</label>
                        <Dot>.</Dot><Dot>.</Dot><Dot>.</Dot>
                    </label>
                    <label style={{margin: 10}}> {noOfContestants + 1}/10 </label>
                    <button className="start-earlier-button" onClick={startGame}>
                        Start earlier if you don't want to wait anymore
                    </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}>
                            You have to wait for at least one contestant to join!
                        </label>
                        : null
                    }
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button"> Next</button>
                    </div>
                </header>
            </div>
        </div>
    );
}