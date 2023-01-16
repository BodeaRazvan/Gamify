import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navbar} from "react-bootstrap";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";


export default function ChooseCourseCategory() {
    const [physicsIsClicked, setPhysicsIsClicked] = useState(false);
    const [biologyIsClicked, setBiologyIsClicked] = useState(false);
    const [chemistryIsClicked, setChemistryIsClicked] = useState(false);
    const [csIsClicked, setCSIsClicked] = useState(false);
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage = () => {
        if (physicsIsClicked || biologyIsClicked || chemistryIsClicked || csIsClicked) {
            if(localStorage.getItem("gameOption") === "4"){
                navigate('/dragAndDropQuiz');
            }else if (localStorage.getItem("gameOption") === "1"){
                navigate('/classicQuiz');
            }else if (localStorage.getItem("gameOption") === "2"){
                navigate('/approximateQuiz');
            }else if (localStorage.getItem("gameOption") === "3"){
                navigate('/uniteTheColumnsQuiz');
            }else if (localStorage.getItem("gameOption") === "5")
                navigate('/coursePage1');
            else {
                navigate('/coursePage1');
            }
        } else {
            setErrorActivated(true);
        }
    }

    const goBack = () => {
        navigate('/chooseCourseSubject');
    }

    const logOut = () => {
        navigate('/');
    }

    const handleSelection = (event) => {
        localStorage.setItem("courseCategory", JSON.stringify(event.target.value));
        if (event.target.value === "Physics") {
            setPhysicsIsClicked(true);
            setBiologyIsClicked(false);
            setChemistryIsClicked(false);
            setCSIsClicked(false);
        } else if (event.target.value === "Biology") {
            setPhysicsIsClicked(false);
            setBiologyIsClicked(true);
            setChemistryIsClicked(false);
            setCSIsClicked(false);
        } else if (event.target.value === "Chemistry") {
            setPhysicsIsClicked(false);
            setBiologyIsClicked(false);
            setChemistryIsClicked(true);
            setCSIsClicked(false);
        } else if (event.target.value === "Computer Science") {
            setPhysicsIsClicked(false);
            setBiologyIsClicked(false);
            setChemistryIsClicked(false);
            setCSIsClicked(true);
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
                    <h1> Choose a category for course subject {localStorage.getItem("courseSubject")} </h1>
                    <button className={physicsIsClicked ? "subject-button-clicked" : "subject-button"} value={"Physics"}
                            onClick={handleSelection}> Physics
                    </button>
                    <button className={biologyIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Biology"} onClick={handleSelection}> Biology
                    </button>
                    <button className={chemistryIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Chemistry"} onClick={handleSelection}> Chemistry
                    </button>
                    <button className={csIsClicked ? "subject-button-clicked" : "subject-button"}
                            value={"Computer Science"} onClick={handleSelection}> Computer Science
                    </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> You have to choose a course category </label>
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