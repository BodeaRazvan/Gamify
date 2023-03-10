import '../App.css';
import '../index.css';
import './ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";


function ClassicQuizPage3() {
    const [answerClicked, setAnswerClicked] = useState(null);
    const [answerConfirmed, setAnserConfirmed] = useState(null);
    const [time, setTime] = useState(30);
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();
    const goToNextPage = () => {
        navigate('/goodJob');
    }

    const goBack = () => {
        navigate('/classicQuizPage2');
    }

    const question =
        "Curabitur id quam non risus aliquet molestie non id augue. Nullam pretium ultricies tellus vel lacinia. Maecenas placerat eros eget velit tincidunt fringilla. Etiam gravida volutpat consequat. Cras sodales feugiat elit eu viverra. Vivamus ornare pulvinar eros, non dictum mauris consectetur vel?";

    const answers = [
        "sodales pharetra",
        "rhoncus sed",
        "quis tortor",
        "velit libero"
    ];

    useEffect(() => {
        let interval = null;
        if(time > 0) {
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        } else {
            setDisabled(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [time]);

    const handleSelection = (event) => {
        setAnswerClicked(event.target.value);
        console.log(event.target.value)
    }

    const clickConfirm = () => {
        setAnserConfirmed(answerClicked);
    }

    const getAnsButtonStyle = (ans) => {
        if(answerConfirmed){
            if(ans === answerConfirmed)
                return "answer-right";
            else return "answer-fade";
        }else {
            if(answerClicked === ans)
                return  "answer-button-clicked";
        }
        return "answer-button";
    }

    return(
        <div>
            <NavbarCustom/>

            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <br />
                    <br />
                    <div id="timer" className="timer">Remaining time: {time}</div>
                    <br />
                    <textarea className="lorem-quiz-text" rows="3" cols="100" value={question} readOnly={true}>
    </textarea>
                    <div className="button-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}>
                        <button className={getAnsButtonStyle("answer1")} value={"answer1"} onClick={handleSelection} disabled={disabled}> {answers[0]}</button>
                        <button className={getAnsButtonStyle("answer2")} value={"answer2"} onClick={handleSelection} disabled={disabled}> {answers[1]}</button>
                        <button className={getAnsButtonStyle("answer3")} value={"answer3"} onClick={handleSelection} disabled={disabled}> {answers[2]}</button>
                        <button className={getAnsButtonStyle("answer4")} value={"answer4"} onClick={handleSelection} disabled={disabled}> {answers[3]}</button>
                    </div>
                    <div>
                        <button className={answerConfirmed ? "confirm-button-clicked" : "confirm-button"} onClick={clickConfirm} disabled={disabled}> Confirm</button>
                    </div>
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        {answerConfirmed && <button className="next-button" onClick={goToNextPage}> Next </button>}
                    </div>
                </header>

            </div>
        </div>
    );
}
export default ClassicQuizPage3;

