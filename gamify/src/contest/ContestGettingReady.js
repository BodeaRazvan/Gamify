import '../App.css';
import '../index.css';
import './Contest.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";

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

    console.log("***" + JSON.parse(localStorage.getItem("numberOfPlayers")))

    return(
        <div>
            <NavbarCustom/>
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