import '../App.css';
import '../index.css';
import '../quiz/ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import GenerateAvatar from "../avatar/GenerateAvatar";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function GoodJobNewQuiz() {
    const trophy1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262082888994856/T1.png"
    const confetti = "https://media.giphy.com/media/VdidEvq6v8z8eNOldF/giphy.gif";
    const score = JSON.parse(localStorage.getItem("newQuizScore")) ;

    return(
        <div className="background-confetti">
            <NavbarCustom/>
            <SidebarSimpleMainPage/>

            <div className="App" style={{fontFamily: "poppins"}}>
                <br />
                <br/>
                <header className="myHeader">
                    <GenerateAvatar/>
                    <h2 style={{color: "#ffcc00"}}>Congratulations, you earned a trophy!</h2>
                    <h3 style={{color: "#ecc739"}}>Your score: {score}</h3>
                    <img src={trophy1} alt="trophy1" style={{width: "100px", height: "100px"}}/>
                    <img src={confetti} alt="confetti" style={{width: "100%", height: "50%"}}/>


                </header>
            </div>

        </div>
    );
}

export default GoodJobNewQuiz;