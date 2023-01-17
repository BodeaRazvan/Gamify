import '../App.css';
import '../index.css';
import './Contest.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


export default function Contest() {

    const [scienceIsClicked, setScienceIsClicked] = useState(false);
    const [mathIsClicked, setMathIsClicked] = useState(false);
    const [languagesIsClicked, setLanguagesIsClicked] = useState(false);
    const [geographyIsClicked, setGeographyIsClicked] = useState(false);
    const [historyIsClicked, setHistoryIsClicked] = useState(false);
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage = () => {
        if(scienceIsClicked || mathIsClicked || languagesIsClicked || geographyIsClicked || historyIsClicked){
            navigate('/choiceOfContestants');
        } else {
            setErrorActivated(true);
        }
    }

    const goBack = () => {
        navigate('/mainPage');
    }

    const handleSelection = (event) => {
        localStorage.setItem("subjectForContest", JSON.stringify(event.target.value));
        if(event.target.value === "Science"){
            setScienceIsClicked(true);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Mathematics"){
            setScienceIsClicked(false);
            setMathIsClicked(true);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Languages"){
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(true);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Geography"){
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(true);
            setHistoryIsClicked(false);
        } else if (event.target.value === "History"){
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(true);
        }
    }

    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> Choose a subject </h1>
                    <button className={scienceIsClicked ? "subject-button-clicked" : "subject-button"} value={"Science"} onClick={handleSelection}> Science </button>
                    <button className={mathIsClicked ? "subject-button-clicked" : "subject-button"} value={"Mathematics"} onClick={handleSelection}> Mathematics </button>
                    <button className={languagesIsClicked ? "subject-button-clicked" : "subject-button"} value={"Languages"} onClick={handleSelection}> Languages </button>
                    <button className={geographyIsClicked ? "subject-button-clicked" : "subject-button"} value={"Geography"} onClick={handleSelection}> Geography </button>
                    <button className={historyIsClicked ? "subject-button-clicked" : "subject-button"} value={"History"} onClick={handleSelection}> History </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> You have to choose a subject </label>
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