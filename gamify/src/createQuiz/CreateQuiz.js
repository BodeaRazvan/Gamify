import '../App.css';
import '../index.css';
import '../quiz/ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function CreateQuiz() {
    let navigate = useNavigate();

    const goToNextPage = () => {
        localStorage.setItem("gameOption","6");
        navigate("/chooseCourseSubject");
    }

    const goToQuizPage = () => {
        localStorage.setItem('newQuizScore', JSON.stringify(0));
        navigate('/startNewQuiz');
    }


    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>

                <header className="myHeader">
                    <button className="myButton" onClick={goToNextPage}> Create Quiz </button>
                    <br />
                    <button className="myButton" onClick={goToQuizPage}> Start your Quiz </button>
                </header>

            </div>
        </div>
    );
}

export default CreateQuiz;