import '../App.css';
import '../index.css';
import '../connections/Connections.css'
import 'react-pro-sidebar/dist/css/styles.css';
import * as QandA from './ContestQuestionsAndAnswers';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import SidebarCustom from "../sidebarAndNavbar/SidebarCustom";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import {useEffect} from "react";


export default function RankingPage() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [invitedPlayers, setInvitedPlayers] = useState(JSON.parse(localStorage.getItem("invitedPlayers")));
    const [noOfPlayers, setNoOfPlayers] =  useState(JSON.parse(localStorage.getItem("numberOfPlayers")));
    const [noOfCorrectAnswers, setNoOfCorrectAnswers] =  useState(JSON.parse(localStorage.getItem("noOfCorrectAnswers")));

    const [firstPlace, setFirstPlace] = useState("");
    const [secondPlace, setSecondPlace] = useState("");
    const [thirdPlace, setThirdPlace] = useState("");
    const [fourthPlace, setFourthPlace] = useState("");
    const [fifthPlace, setFifthPlace] = useState("");

    console.log(noOfPlayers);

    let navigate = useNavigate();

    const exit = () => {
        navigate('/mainPage');
    }

    return(
        <div>
            <NavbarCustom/>
            <SidebarCustom/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> Congratulations! </h1>
                    <label style={{fontSize: 35}}> <b>First place: {firstPlace}</b> </label>
                    <label style={{fontSize: 35}}> <b>Second place: {secondPlace}</b> </label>
                    <label style={{fontSize: 35}}> <b>Third place: {thirdPlace}</b> </label>
                    <label style={{fontSize: 30, marginTop: 10}}> Fourth place: {fourthPlace}</label>
                    <label style={{fontSize: 30}}> Fifth place: {fifthPlace}</label>
                    <div>
                        <button className="go-back-button" onClick={exit}> Exit </button>
                    </div>
                </header>
            </div>
        </div>
    );
}