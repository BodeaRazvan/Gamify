import '../App.css';
import '../index.css';
import './WaitingForPeople.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {useState} from "react";

export default function ContestGettingReady() {

    const [timeUntilStartContest, setTimeUntilStartContest] = useState(3000);

    let navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUntilStartContest(timeUntilStartContest - 1000)
            if(timeUntilStartContest === 0) {
                navigate('/contestProgress');
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timeUntilStartContest]);

    const logOut = () => {
        navigate('/');
    }

    console.log("***" + JSON.parse(localStorage.getItem("numberOfPlayers")))

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
                    <div className="one-below-another">
                        <h2> Be ready! The contest will start in </h2>
                        <h1> {timeUntilStartContest / 1000} </h1>
                    </div>
                </header>
            </div>
        </div>
    );
}