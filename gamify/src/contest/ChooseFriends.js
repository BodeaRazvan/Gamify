import '../App.css';
import '../index.css';
import '../connections/Connections.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import SidebarMainPage from "../sidebarAndNavbar/SidebarMainPage";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


export default function ChooseFriends() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [myConnections, setMyConnections] = useState(
        JSON.parse(localStorage.getItem("myConnections")).map(connection => {
            return {...connection, invited: false};
        })
    );
    const [invitedPlayers, setInvitedPlayers] = useState([]);
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage= () => {
        if(invitedPlayers.length >= 2){
            navigate('/waitingForPeople');
        } else {
            setErrorActivated(true);
        }
    }

    const handleInvite = (event) => {
        const value = event.target.value;

        const newState = myConnections.map(user => {
            if (user.username === value && user.invited === false) {
                const newUsers = invitedPlayers.concat({username: value, joined: false})
                setInvitedPlayers(newUsers)
                localStorage.setItem("invitedPlayers", JSON.stringify(newUsers));
                return {...user, invited: true};
            }
            return user;
        });
        setMyConnections(newState);
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
                    <h1> Choose from your connections </h1>
                    <div className="connections-list">
                        <ul>
                            {myConnections.map((connection) => {
                                return (
                                    <li className="connection-buttons" style={{listStyle: 'none'}}>
                                        <button className="search-user-button" value={connection.username}>{connection.username}</button>
                                        <button
                                            className={connection.invited ? "request-sent-button" : "send-request-button"}
                                            value={connection.username}
                                            name="removed"
                                            onClick={handleInvite}>{connection.invited ? "Invited" : "Invite"}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <label>Invited players: {invitedPlayers.length}</label>
                    <div style={{maxWidth: 800}}>
                        {invitedPlayers.map((player) => {
                            return (
                                <button className="invited-player-button">{player.username}</button>
                            )
                        })}
                    </div>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> Please choose at least 2 users from the list </label>
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