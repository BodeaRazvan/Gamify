import '../App.css';
import '../index.css';
import './Contest.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {useState} from "react";
import { Dot } from 'react-animated-dots';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";


export default function WaitingForPeople() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [contestMode] = useState(JSON.parse(localStorage.getItem("contestMode")));
    const [errorActivated, setErrorActivated] = useState(false);
    const [noOfContestants, setNoOfContestants] = useState(0);
    const [invitedPlayers] = useState(JSON.parse(localStorage.getItem("invitedPlayers")))
    const [randomUsers] = useState(
        JSON.parse(localStorage.getItem("strangers")).map(player => {
            return {...player, joined: false};
        })
    );

    const initializeNoOfInvitedPeople = () => {
        if(contestMode === "Invite friends"){
            return invitedPlayers.length;
        }else if (contestMode === "Global"){
            return 9;
        }
    }

    const [noOfInvitedPeople] = useState(initializeNoOfInvitedPeople());

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

            if(contestMode === "Invite friends"){
                const updatedInvitedPlayers = invitedPlayers.slice(0,noOfContestants + 1).map(player => {
                    if(!player.joined){
                        return {...player, joined: true};
                    }
                    return player;
                })
                localStorage.setItem("players", JSON.stringify(updatedInvitedPlayers));
            } else {
                const updatedInvitedPlayers = randomUsers.slice(0,noOfContestants + 1).map(player => {
                    if(!player.joined){
                        return {...player, joined: true};
                    }
                    return player;
                })
                localStorage.setItem("players", JSON.stringify(updatedInvitedPlayers));
            }
            localStorage.setItem("numberOfPlayers", JSON.stringify(noOfContestants + 1));
            if(noOfContestants > noOfInvitedPeople - 1){
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
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h2> {subject} </h2>
                    <label>
                        <label style={{margin: 10}}>Waiting for others to join</label>
                        <Dot>.</Dot><Dot>.</Dot><Dot>.</Dot>
                    </label>
                    <label style={{margin: 10}}> {noOfContestants + 1}/{noOfInvitedPeople + 1} </label>
                    <button className="start-earlier-button" onClick={startGame}>
                        Start earlier if you don't want to wait anymore
                    </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}>
                            You have to wait for at least 2 contestants to join!
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