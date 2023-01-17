import '../App.css';
import '../index.css';
import './Connections.css'
import 'react-pro-sidebar/dist/css/styles.css';
import React, {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";


export default function Connections() {

    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        {username: 'AndrewTownsend', requestSent: false},
        {username: 'claraRandall', requestSent: false},
        {username: 'julieOrtega', requestSent: false},
        {username: 'RobCarmichael', requestSent: false},
        {username: 'CassandraPhillips', requestSent: false},
        {username: 'robinHobb', requestSent: false},
        {username: 'JoBeverly', requestSent: false},
        {username: 'CeceliaHolland', requestSent: false},
        {username: 'neilGaiman', requestSent: false},
    ]);
    localStorage.setItem("strangers", JSON.stringify(users));
    const [myConnections, setMyConnections] = useState([
        {username: 'maryJoPutney', removed: false},
        {username: 'adamCarrey', removed: false},
        {username: 'KiriLawford', removed: false},
        {username: 'MariahStill', removed: false}
    ]);
    localStorage.setItem("myConnections", JSON.stringify(myConnections));

    const handleSendRequest = (event) => {
        const value = event.target.value;

        const newState = users.map(user => {
            if (user.username === value) {
                return {...user, requestSent: true};
            }
            return user;
        });
        setUsers(newState);
        localStorage.setItem("strangers", JSON.stringify(myConnections));
    }

    const handleRemove = (event) => {
        const value = event.target.value;

        const newMyConnections = myConnections.filter(connection => connection.username !== value);
        setMyConnections(newMyConnections);
        localStorage.setItem("myConnections", JSON.stringify(myConnections));

        const newUsers = users.concat({username: value, requestSent: false})
        setUsers(newUsers)
        localStorage.setItem("strangers", JSON.stringify(myConnections));
    }

    return(
        <div>
            <NavbarCustom/>
            <SidebarProfile/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> Connections </h1>
                    <div className="two-cols">
                        <div style={{border: "5px solid pink", borderRadius: "20px", marginRight: "10px"}}>
                            <div>
                                <label style={{margin: 10}}> Search for new connections: </label>
                                <input style={{fontSize: 20}} type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
                            </div>
                            <div className="users-list">
                                <ul>
                                    {users.filter((user => {
                                        if(searchTerm === ""){
                                            return user;
                                        }else if (user.username.toLowerCase().includes(searchTerm.toLowerCase())){
                                            return user;
                                        }
                                    })).map((user) => {
                                        return (
                                            <li className="connection-buttons" style={{listStyle: 'none'}}>
                                                <button className="search-user-button" value={user.username}>{user.username}</button>
                                                <button
                                                    className={user.requestSent ? "request-sent-button" : "send-request-button"}
                                                    value={user.username}
                                                    name="requestSent"
                                                    onClick={handleSendRequest}>{user.requestSent ? "Request sent" : "Send request"}</button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div style={{border: "5px solid white", borderRadius: "20px", marginLeft: "10px"}}>
                            <h4> Your connections: </h4>
                            <div className="connections-list">
                                <ul>
                                    {myConnections.map((connection) => {
                                        return (
                                            <li className="connection-buttons" style={{listStyle: 'none'}}>
                                                <button className="search-user-button" value={connection.username}>{connection.username}</button>
                                                <button
                                                    className="send-request-button"
                                                    value={connection.username}
                                                    name="removed"
                                                    onClick={handleRemove}>Remove</button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}