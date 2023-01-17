import '../App.css';
import '../index.css';
import '../quiz/ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function ConfirmQuiz() {
    let navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/createQuiz');
        console.log(localStorage.getItem('quiz'));
    }
    const goToHome = () => {
        localStorage.setItem('quiz', {});
        console.log(localStorage.getItem('quiz'));
        navigate('/mainPage');
    }


    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>

                <header className="myHeader">
                    <button className="myButton" onClick={goToNextPage}> Save quiz for yourself </button>
                    <br />
                    <button className="myButton" onClick={goToNextPage}> Publish quiz for other users </button>
                    <br />
                    <button className="myButton" onClick={goToHome}> Discard quiz </button>
                    <br />

                </header>

            </div>
        </div>
    );
}

export default ConfirmQuiz;