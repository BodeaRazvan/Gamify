import '../App.css';
import '../index.css';
import '../connections/Connections.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import SidebarMainPage from "../sidebarAndNavbar/SidebarMainPage";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import {useEffect} from "react";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


export default function RankingPage() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [contestMode] = useState(JSON.parse(localStorage.getItem("contestMode")));
    const [noOfPlayers, setNoOfPlayers] =  useState(JSON.parse(localStorage.getItem("numberOfPlayers")));
    const [noOfCorrectAnswers, setNoOfCorrectAnswers] =  useState(JSON.parse(localStorage.getItem("noOfCorrectAnswers")));
    const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players")));
    const [randomUsers, setRandomUsers] = useState(JSON.parse(localStorage.getItem("strangers")));

    const [firstPlace, setFirstPlace] = useState(false);
    const [secondPlace, setSecondPlace] = useState(false);
    const [thirdPlace, setThirdPlace] = useState(false);
    const [fourthPlace, setFourthPlace] = useState(false);

    const [rankingList, setRankingList] = useState([]);

    let navigate = useNavigate();

    const exit = () => {
        navigate('/mainPage');
    }

    useEffect(() => {
        if(noOfCorrectAnswers === 3){
            setFirstPlace(true);
        }else if(noOfCorrectAnswers === 2){
            setSecondPlace(true);
        } else if(noOfCorrectAnswers === 1){
            setThirdPlace(true);
        } else if(noOfCorrectAnswers === 0){
            if(noOfPlayers === 2){
                setThirdPlace(true);
            }else{
                setFourthPlace(true);
            }
        }
    }, [])

    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> Congratulations! </h1>
                    {firstPlace
                        ?
                        <label style={{fontSize: 35}}> <b> You are the 1st place </b> </label>
                        : ( secondPlace
                            ?
                            <label style={{fontSize: 35}}> <b> You are the 2nd place </b> </label>
                            : ( thirdPlace
                                ?
                                <label style={{fontSize: 35}}> <b> You are the  3rd place </b> </label>
                                : ( fourthPlace
                                    ?
                                    <label style={{fontSize: 35}}> <b> You are the  4th place </b> </label>
                                    : null)))}
                    <button className="go-back-button" onClick={exit}> Exit </button>
                </header>
            </div>
        </div>
    );
}