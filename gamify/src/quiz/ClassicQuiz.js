import '../App.css';
import '../index.css';
import './ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function ClassicQuiz() {
    let navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/classicQuizPage1');
    }


    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>

                <header className="myHeader">
                <button className="myButton" onClick={goToNextPage}> Start Quiz</button>
                </header>

            </div>
        </div>
    );
}

export default ClassicQuiz;