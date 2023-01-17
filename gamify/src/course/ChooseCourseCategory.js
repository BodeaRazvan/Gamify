import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navbar} from "react-bootstrap";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


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
                navigate('/approximatePage1');
            }else if (localStorage.getItem("gameOption") === "3"){
                navigate('/uniteTheColumnsQuiz');
            }else if (localStorage.getItem("gameOption") === "5")
                navigate('/coursePage1');
            else if (localStorage.getItem("gameOption") === "6")
                navigate('/createQuizPage');
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
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <h1> Choose a category for subject {localStorage.getItem("courseSubject")} </h1>
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