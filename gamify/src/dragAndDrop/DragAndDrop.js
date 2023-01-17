import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";
import Draggable from "react-draggable";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function DragAndDrop() {
    const paris1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064287258657697922/paris1.jpg"
    const paris2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064287076452929688/paris2.jpg"
    const london1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064287031817150554/london1.jpg"
    const london2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064287046136516728/london2.jpg"

    const [xLondon1, setXLondon1] = useState(0);
    const [yLondon1, setYLondon1] = useState(0);
    const [xLondon2, setXLondon2] = useState(0);
    const [yLondon2, setYLondon2] = useState(0);
    const [xParis1, setXParis1] = useState(0);
    const [yParis1, setYParis1] = useState(0);
    const [xParis2, setXParis2] = useState(0);
    const [yParis2, setYParis2] = useState(0);
    const [correctLondon1, setCorrectLondon1] = useState(false);
    const [correctLondon2, setCorrectLondon2] = useState(false);
    const [correctParis1, setCorrectParis1] = useState(false);
    const [correctParis2, setCorrectParis2] = useState(false);

    const [finished, setFinished] = useState(false);

    let navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToRegister = () => {
        navigate('/register');
    }

    const logOut = () => {
        navigate('/');
    }


    const parisTarget = document.getElementById("parisDiv");
    const londonTarget = document.getElementById("londonDiv");

    const calculateResults = () => {
        const boundsParisTarget = parisTarget.getBoundingClientRect();
        const boundsLondonTarget = londonTarget.getBoundingClientRect();

        const boundsParis1 = document.getElementById("paris1").getBoundingClientRect();
        const boundsParis2 = document.getElementById("paris2").getBoundingClientRect();
        const boundsLondon1 = document.getElementById("london1").getBoundingClientRect();
        const boundsLondon2 = document.getElementById("london2").getBoundingClientRect();

        if (boundsParis1.x >= boundsParisTarget.x && boundsParis1.x <= boundsParisTarget.x + boundsParisTarget.width && boundsParis1.y >= boundsParisTarget.y && boundsParis1.y <= boundsParisTarget.y + boundsParisTarget.height) {
            setCorrectParis1(true);
        }
        if (boundsParis2.x >= boundsParisTarget.x && boundsParis2.x <= boundsParisTarget.x + boundsParisTarget.width && boundsParis2.y >= boundsParisTarget.y && boundsParis2.y <= boundsParisTarget.y + boundsParisTarget.height) {
            setCorrectParis2(true);
        }
        if (boundsLondon1.x >= boundsLondonTarget.x && boundsLondon1.x <= boundsLondonTarget.x + boundsLondonTarget.width && boundsLondon1.y >= boundsLondonTarget.y && boundsLondon1.y <= boundsLondonTarget.y + boundsLondonTarget.height) {
            setCorrectLondon1(true);
        }
        if (boundsLondon2.x >= boundsLondonTarget.x && boundsLondon2.x <= boundsLondonTarget.x + boundsLondonTarget.width && boundsLondon2.y >= boundsLondonTarget.y && boundsLondon2.y <= boundsLondonTarget.y + boundsLondonTarget.height) {
            setCorrectLondon2(true);
        }
    }


    const [seconds, setSeconds] = useState(60);

    const Timer = () => {

        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
            if(seconds <= 0){
                setSeconds(60);
                setFinished(true);
                setSeconds(10);
                setTimeout(() => {navigate("/goodJob")},10000);
                calculateResults();
            }
            return () => clearInterval(interval);
        }, []);

        return <div style={{position:"absolute",top:"7%"}}>{seconds} seconds left</div>;
    }

    return(
        <div>
            <NavbarCustom/>

            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <Timer/>
                    <div style={{width:"50%",position:"absolute",left:"5%",top:"15%"}}>
                        London
                    </div>
                    <div id={"londonDiv"} style={{minHeight:"300px",border:"1px solid black ",width:"50%",position:"absolute",left:"5%",top:"15%"}}>

                    </div>
                    <div style={{width:"50%",position:"absolute",left:"5%",top:"55%"}}>
                        Paris
                    </div>
                    <div id={"parisDiv"} style={{minHeight:"300px",border:"1px solid black ",width:"50%",position:"absolute",left:"5%",top:"55%"}}>

                    </div>

                    <div style={{position:"absolute",minHeight:"71%", border:"1px solid black",width:"30%",left:"65%",top:"15%"}}>
                       <Draggable
                           onStop={(e, data) => {
                                 setXLondon1(data.x);
                                 setYLondon1(data.y);
                           }}
                       >
                        <img
                        style={
                        (finished && correctLondon1) ? {border:"5px solid green",width:"200px",height:"200px"} :(finished && !correctLondon1) ? {border:"5px solid red",width:"200px",height:"200px"} : {width:"200px",height:"200px"}
                        }
                            id="london1" src={london1} alt={1}/>
                       </Draggable>
                        <Draggable
                            onStop={(e, data) => {
                                setXParis1(data.x);
                                setYParis1(data.y);
                            }}
                        >
                        <img
                           style={
                                 (finished && correctParis1) ? {marginLeft:"10px",border:"5px solid green",width:"150px",height:"250px"} :(finished && !correctParis1) ? {marginLeft:"10px",border:"5px solid red",width:"150px",height:"250px"} : {marginLeft:"10px",width:"150px",height:"250px"}
                           }
                            id="paris1" src={paris1} alt={2}/>
                        </Draggable>
                        <p/>
                        <Draggable
                            onStop={(e, data) => {
                                setXLondon2(data.x);
                                setYLondon2(data.y);
                            }}
                        >
                        <img
                            style={
                                (finished && correctLondon2) ? {border:"5px solid green",width:"200px",height:"200px"} :(finished && !correctLondon2) ? {border:"5px solid red",width:"200px",height:"200px"} : {width:"200px",height:"200px"}
                            }
                            id="london2" src={london2} alt={3}/>
                        </Draggable>
                        <Draggable
                            onStop={(e, data) => {
                                setXParis2(data.x);
                                setYParis2(data.y);
                            }}
                        >
                        <img
                            style={
                                (finished && correctParis2) ? {marginLeft:"10px",border:"5px solid green",width:"200px",height:"200px"} :(finished && !correctParis2) ? {marginLeft:"10px",border:"5px solid red",width:"200px",height:"200px"} : {marginLeft:"10px",width:"200px",height:"200px"}
                            }
                            id="paris2" src={paris2} alt={4}/>
                        </Draggable>
                    </div>

                    <button style={{position:"absolute",top:"90%"}} className={"myButton"}
                        onClick={() => {setFinished(true);setSeconds(10);
                            setTimeout(() => {navigate("/goodJob")},10000);
                            calculateResults();
                        }}
                    > Confirm </button>

                </header>
            </div>
        </div>
    );
}

export default DragAndDrop;