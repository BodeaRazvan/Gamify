import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navbar} from "react-bootstrap";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";


export default function ChooseSubject() {
    const [scienceIsClicked, setScienceIsClicked] = useState(false);
    const [mathIsClicked, setMathIsClicked] = useState(false);
    const [languagesIsClicked, setLanguagesIsClicked] = useState(false);
    const [geographyIsClicked, setGeographyIsClicked] = useState(false);
    const [historyIsClicked, setHistoryIsClicked] = useState(false);
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage = () => {
        if (scienceIsClicked || mathIsClicked || languagesIsClicked || geographyIsClicked || historyIsClicked) {
            navigate('/chooseCourseCategory');
        } else {
            setErrorActivated(true);
        }
    }

    const goBack = () => {
        navigate('/mainPage');
    }

    const logOut = () => {
        navigate('/');
    }

    const handleSelection = (event) => {
        localStorage.setItem("courseSubject", JSON.stringify(event.target.value));
        if (event.target.value === "Science") {
            setScienceIsClicked(true);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Mathematics") {
            setScienceIsClicked(false);
            setMathIsClicked(true);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Languages") {
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(true);
            setGeographyIsClicked(false);
            setHistoryIsClicked(false);
        } else if (event.target.value === "Geography") {
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(true);
            setHistoryIsClicked(false);
        } else if (event.target.value === "History") {
            setScienceIsClicked(false);
            setMathIsClicked(false);
            setLanguagesIsClicked(false);
            setGeographyIsClicked(false);
            setHistoryIsClicked(true);
        }
    }

    return (
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily: "poppins"}}>
                <div>
                    <p className="navBarTitle" style={{display: "inline", color: "white"}}>Gamify</p>
                    <p className="navBarStreak" style={{display: "inline", color: "white"}}>Streak:
                        <p style={{display: "inline", color: "yellow"}}>
                            12 days
                        </p></p>
                    <p className="navBarNotification" style={{display: "inline", color: "white"}}>Notifications:
                        <p style={{display: "inline", color: "red"}}>
                            3
                        </p>
                    </p>
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
                    <MenuItem onClick={() => {
                    }}>Menu</MenuItem>
                    <SubMenu title="Games">
                        <MenuItem onClick={() => navigate("/admin/users")}> Classic quiz</MenuItem>
                        <MenuItem onClick={() => {
                        }}> Drag & Drop</MenuItem>
                    </SubMenu>
                    <SubMenu title="Courses" onClick={() => navigate("/chooseCourseSubject")}>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <h1> Choose a subject </h1>
                    <button className={scienceIsClicked ? "subject-button-clicked" : "subject-button"} value={"Science"}
                            onClick={handleSelection}> Science
                    </button>
                    <button className={languagesIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Languages"} onClick={handleSelection}> Languages
                    </button>
                    <button className={mathIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Mathematics"} onClick={handleSelection}> Mathematics
                    </button>

                    <button className={geographyIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Geography"} onClick={handleSelection}> Geography
                    </button>
                    <button className={historyIsClicked ? "subject-button-clicked" : "subject-button"} value={"History"}
                            onClick={handleSelection}> History
                    </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> You have to choose a subject </label>
                        : null
                    }
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button" onClick={goToNextPage}> Next</button>
                    </div>
                </header>
            </div>
        </div>
    );

}