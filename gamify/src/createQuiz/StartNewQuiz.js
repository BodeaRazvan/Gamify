import '../App.css';
import '../index.css';
import '../quiz/ClassicQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function StartNewQuiz() {
    let navigate = useNavigate();

    const goToNextPage = () => {
        localStorage.setItem("gameOption","6");
        navigate("/chooseCourseSubject");
    }


    const quiz = JSON.parse(localStorage.getItem('quiz'));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(Number(window.location.pathname.split("/")[1]));
    const [time, setTime] = useState(30);
    const [disabled, setDisabled] = useState(false);
    const [answerClicked, setAnswerClicked] = useState(null);
    const [answerConfirmed, setAnswerConfirmed] = useState(null);
    let score = 0;

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

    useEffect(() => {
        if (!currentQuestionIndex) {
            setCurrentQuestionIndex(0);
        }
    }, [currentQuestionIndex]);

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setAnswerConfirmed(null);
            setTime(30);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            if(score){
                const formerScore = JSON.parse(localStorage.getItem('newQuizScore')) + 1;
                console.log(formerScore);
                localStorage.setItem('newQuizScore', JSON.stringify(formerScore));
            }
            score = 0;
            window.history.pushState({}, '', `/startNewQuiz/${currentQuestionIndex + 1}`);
        }
        else {
            if(score){
                const formerScore = JSON.parse(localStorage.getItem('newQuizScore')) + 1;
                console.log(formerScore);
                localStorage.setItem('newQuizScore', JSON.stringify(formerScore));
            }
            navigate('/goodJobNewQuiz');
        }
    };

    const handleSelection = (event) => {
        setAnswerClicked(event.target.value);
        console.log(event.target.value)
    }

    const getAnsButtonStyle = (ans, isCorrect) => {
        if(answerConfirmed){
            if(ans === answerConfirmed){
                console.log(ans);
                console.log(isCorrect);
                if(isCorrect) {
                    score = 1;
                    return "answer-right";
                }
                return "answer-wrong";
            }
            else return "answer-fade";
        }else {
            if(answerClicked === ans)
                return  "answer-button-clicked";
        }
        return "answer-button";
    }

    const clickConfirm = () => {
        setAnswerConfirmed(answerClicked);
    }


    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>

                <header className="myHeader">
                    <br />
                    <br />
                    <div id="timer" className="timer">Remaining time: {time}</div>
                    <br />

                    <div>
                        {quiz.questions.map((question, questionIndex) => {
                            if (questionIndex === currentQuestionIndex) {
                                return (
                                    <div key={questionIndex}>
                                         <textarea className="lorem-quiz-text" rows="3" cols="100" value={question.question} readOnly={true}>
                                         </textarea>
                                        <div className="button-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}>

                                        {question.answers.map((answer, answerIndex) => (
                                            <button className={getAnsButtonStyle(`${answerIndex} ${questionIndex}`, answer.isCorrect)} value={`${answerIndex} ${questionIndex}`} onClick={handleSelection} disabled={disabled}> {answer.text} </button>

                                        ))}

                                        </div>
                                        <div>
                                            <button className={answerConfirmed ? "confirm-button-clicked" : "confirm-button"} onClick={clickConfirm} disabled={disabled}> Confirm</button>
                                        </div>
                                        {answerConfirmed && <button className="next-button" onClick={handleNext}> Next </button>}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </header>

            </div>
        </div>
    );
}

export default StartNewQuiz;