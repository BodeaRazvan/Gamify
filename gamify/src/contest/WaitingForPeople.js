import '../App.css';
import '../index.css';
import './WaitingForPeople.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {useState} from "react";
import { Dot } from 'react-animated-dots';


export default function WaitingForPeople() {

    const [startEarlierIsClicked, setStartEarlierIsClicked] = useState(false);
    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [contestMode] = useState(JSON.parse(localStorage.getItem("contestMode")));
    const [errorActivated, setErrorActivated] = useState(false);
    //const [noOfContestants, setNoOfContestants] = useState(JSON.parse(localStorage.getItem("numberOfContestants")));
    const [noOfContestants, setNoOfContestants] = useState(0);
    const [ready, setReady] = useState(false);
    const [timeUntilStartContest, setTimeUntilStartContest] = useState(3000);

    let navigate = useNavigate();

    const startGame = () => {
        if(noOfContestants >= 2){
            setReady(true);
            setInterval(() => {
                setTimeUntilStartContest(timeUntilStartContest - 1000)
                if(timeUntilStartContest === 0) {
                    navigate('/contestProgress');
                }
            }, 1000);
        } else {
            setErrorActivated(true);
        }
    }

    const goBack = () => {
        if(contestMode === "Global"){
            navigate('/choiceOfContestants');
        } else if(contestMode === "Invite friends"){
            navigate('/chooseFriends');
        }
    }

    const logOut = () => {
        navigate('/');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNoOfContestants(noOfContestants + 1)
            localStorage.setItem("numberOfPlayers", JSON.stringify(noOfContestants + 1));
        }, 1000);
        if(noOfContestants > 10){
            startGame()
        }
        return () => clearInterval(interval);
    }, [noOfContestants]);

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
                { ready ?
                    <header className="myHeader">
                        <div className="one-below-another">
                            <h2> Be ready! The contest will start in </h2>
                            <h1> {timeUntilStartContest / 1000} </h1>
                        </div>
                    </header>
                    :
                    <header className="myHeader">
                        <h1> {subject} </h1>
                        <label>
                            <label style={{margin: 10}}>Waiting for others to join</label>
                            <Dot>.</Dot><Dot>.</Dot><Dot>.</Dot>
                        </label>
                        <label style={{margin: 10}}> {noOfContestants}/10 </label>
                        <button
                            className={startEarlierIsClicked ? "start-earlier-button-clicked" : "start-earlier-button"}
                            onClick={startGame}>
                            Start earlier if you don't want to wait anymore
                        </button>
                        {errorActivated ?
                            <label style={{margin: 10, color: "red"}}> You have to wait for at least one contestant to
                                join! </label>
                            : null
                        }
                        <div>
                            <button className="go-back-button" onClick={goBack}> Go back</button>
                            <button className="next-button"> Next</button>
                        </div>
                    </header>
                }
            </div>
        </div>
    );
}