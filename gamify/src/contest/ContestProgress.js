import '../App.css';
import '../index.css';
import '../connections/Connections.css'
import Popup from './Popup';
import 'react-pro-sidebar/dist/css/styles.css';
import * as QandA from './ContestQuestionsAndAnswers';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import {useEffect} from "react";


export default function ContestProgress() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));

    const [time, setTime] = useState(15);
    const [errorActivated, setErrorActivated] = useState(false);
    const [answerConfirmed, setAnswerConfirmed] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [answerA, setAnswerA] = useState({});
    const [answerB, setAnswerB] = useState({});
    const [answerC, setAnswerC] = useState({});
    const [answerD, setAnswerD] = useState({});

    const [firstQuestion] = useState(true);
    const [secondQuestion, setSecondQuestion] = useState(false);
    const [thirdQuestion, setThirdQuestion] = useState(false);
    const [done, setDone] = useState(false);
    const [doneForMessage, setDoneForMessage] = useState(false);

    const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0);
    localStorage.setItem("noOfCorrectAnswers", JSON.stringify(noOfCorrectAnswers))

    const [popupTriggered, setPopupTriggered] = useState(false);
    const [popupTimeExpiredTriggered, setPopupTimeExpiredTriggered] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1)
        },1000);
        if(time - 1 === -5){
           setTime(15);
           setPopupTimeExpiredTriggered(false);
           if(firstQuestion) {
               setSecondQuestion(true);
           }
           if(secondQuestion){
               setThirdQuestion(true);
           }
           if(thirdQuestion){
               setDone(true);
           }
        }
        if(time - 1 === 0 && thirdQuestion){
            setDoneForMessage(true);
        }
        if(time === 0){
            setPopupTimeExpiredTriggered(true);
        }
        return () => clearInterval(interval);
    }, [time]);

    const confirm = () => {
        if(answerA.selected || answerB.selected || answerC.selected || answerD.selected){
            checkAnswer();
            setAnswerConfirmed(true);
            setErrorActivated(false);
        }else{
            setErrorActivated(true);
        }
    }

    const goToRankingPage = () => {
        navigate('/rankingPage');
    }

    const exit = () => {
        navigate('/mainPage');
    }

    const triggerExitPopup = () => {
        setPopupTriggered(true);
    }

    const handleSelection = (event) => {
        if(!answerConfirmed){
            if(event.target.name === "A"){
                setAnswerA({...answerA, selected: true});
                setAnswerB({...answerB, selected: false});
                setAnswerC({...answerC, selected: false});
                setAnswerD({...answerD, selected: false});
            } else if (event.target.name === "B"){
                setAnswerA({...answerA, selected: false});
                setAnswerB({...answerB, selected: true});
                setAnswerC({...answerC, selected: false});
                setAnswerD({...answerD, selected: false});
            } else if (event.target.name === "C"){
                setAnswerA({...answerA, selected: false});
                setAnswerB({...answerB, selected: false});
                setAnswerC({...answerC, selected: true});
                setAnswerD({...answerD, selected: false});
            } else if (event.target.name === "D"){
                setAnswerA({...answerA, selected: false});
                setAnswerB({...answerB, selected: false});
                setAnswerC({...answerC, selected: false});
                setAnswerD({...answerD, selected: true});
            }
        }
    }

    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

    const checkAnswer = () => {
        if((answerA.correct && answerA.selected) ||
            (answerB.correct && answerB.selected) ||
            (answerC.correct && answerC.selected) ||
            (answerD.correct && answerD.selected)){
                setNoOfCorrectAnswers(noOfCorrectAnswers + 1);
                localStorage.setItem("noOfCorrectAnswers", JSON.stringify(noOfCorrectAnswers + 1))
                setIsAnswerCorrect(true);
        }else{
       setIsAnswerCorrect(false);
        }
    }

    useEffect(() => {
        setAnswerConfirmed(false);
        if (subject === "Science"){
            if (firstQuestion){
                setCurrentQuestion(QandA.scienceQ1);
                setAnswerA({answer: QandA.scienceQ1CorrectAnswer, selected: false, correct: true})
                setAnswerB({answer: QandA.scienceQ1A1, selected: false, correct: false})
                setAnswerC({answer: QandA.scienceQ1A2, selected: false, correct: false})
                setAnswerD({answer: QandA.scienceQ1A3, selected: false, correct: false})
            }
            if (secondQuestion){
                setCurrentQuestion(QandA.scienceQ2);
                setAnswerA({answer: QandA.scienceQ2A1, selected: false, correct: false})
                setAnswerB({answer: QandA.scienceQ2A2, selected: false, correct: false})
                setAnswerC({answer: QandA.scienceQ2CorrectAnswer, selected: false, correct: true})
                setAnswerD({answer: QandA.scienceQ2A3, selected: false, correct: false})
            }
            if (thirdQuestion) {
                setCurrentQuestion(QandA.scienceQ3);
                setAnswerA({answer: QandA.scienceQ3A1, selected: false, correct: false})
                setAnswerB({answer: QandA.scienceQ3A2, selected: false, correct: false})
                setAnswerC({answer: QandA.scienceQ3A3, selected: false, correct: false})
                setAnswerD({answer: QandA.scienceQ3CorrectAnswer, selected: false, correct: true})
            }
        } else if (subject === "Mathematics"){
            if (firstQuestion){
                setCurrentQuestion(QandA.mathQ1);
                setAnswerA({answer: QandA.mathQ1CorrectAnswer, selected: false, correct: true})
                setAnswerB({answer: QandA.mathQ1A1, selected: false, correct: false})
                setAnswerC({answer: QandA.mathQ1A2, selected: false, correct: false})
                setAnswerD({answer: QandA.mathQ1A3, selected: false, correct: false})
            }
            if (secondQuestion){
                setCurrentQuestion(QandA.mathQ2);
                setAnswerA({answer: QandA.mathQ2A1, selected: false, correct: false})
                setAnswerB({answer: QandA.mathQ2A2, selected: false, correct: false})
                setAnswerC({answer: QandA.mathQ2CorrectAnswer, selected: false, correct: true})
                setAnswerD({answer: QandA.mathQ2A3, selected: false, correct: false})
            }
            if (thirdQuestion) {
                setCurrentQuestion(QandA.mathQ3);
                setAnswerA({answer: QandA.mathQ3A1, selected: false, correct: false})
                setAnswerB({answer: QandA.mathQ3A2, selected: false, correct: false})
                setAnswerC({answer: QandA.mathQ3A3, selected: false, correct: false})
                setAnswerD({answer: QandA.mathQ3CorrectAnswer, selected: false, correct: true})
            }
        }
        if(done){
            goToRankingPage()
        }
    }, [firstQuestion, secondQuestion, thirdQuestion, done]);

    return(
        <div>
            <NavbarCustom/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h2> {subject} </h2>
                    {time > 0
                        ?
                        <label style={{margin: 20, fontSize: 30}}> Time:
                            {time >= 10
                                ? <label style={{color: 'green'}}> {time}</label>
                                : <label style={{color: 'red'}}> {time}</label>
                            }
                        </label>
                        :
                        <label style={{margin: 20, fontSize: 30}}> Time:
                            <label style={{color: 'red'}}>0</label>
                        </label>
                    }
                    <label className="question-label"> Question: <b>{currentQuestion}</b></label>
                    <div className="two-cols-contest">
                        <button className={answerA.selected ? "A-button-clicked" : "A-button"}
                                value={answerA.answer}
                                name={"A"}
                                onClick={handleSelection}> A. {answerA.answer} </button>
                        <button className={answerB.selected ? "A-button-clicked" : "A-button"}
                                value={answerB.answer}
                                name={"B"}
                                onClick={handleSelection}> B. {answerB.answer} </button>
                    </div>
                    <div className="two-cols-contest">
                        <button className={answerC.selected ? "A-button-clicked" : "A-button"}
                                value={answerC.answer}
                                name={"C"}
                                onClick={handleSelection}> C. {answerC.answer} </button>
                        <button className={answerD.selected ? "A-button-clicked" : "A-button"}
                                value={answerD.answer}
                                name={"D"}
                                onClick={handleSelection}> D. {answerD.answer} </button>
                    </div>
                    <button
                        className={answerConfirmed ? "confirm-button-contest-clicked" : "confirm-button-contest"}
                        onClick={confirm}>
                        {answerConfirmed ? "Your answer was registered" : "Confirm"}
                    </button>
                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> Choose one answer before pressing confirm! </label>
                        : null
                    }
                    <div>
                        <button className="go-back-button" onClick={triggerExitPopup}> Exit </button>
                    </div>
                    <Popup trigger={popupTriggered} setTrigger={setPopupTriggered}>
                        <h3>Are you sure you want to exit the contest?</h3>
                        <div>
                            <button className="popup-button" onClick={exit}> Yes </button>
                            <button className="popup-button" onClick={() => setPopupTriggered(false)}> No </button>
                        </div>
                    </Popup>
                    <Popup trigger={popupTimeExpiredTriggered} setTrigger={setPopupTimeExpiredTriggered}>
                        <label style={{margin: 20, fontSize: 30}}>
                            {(isAnswerCorrect && answerConfirmed)
                                ? <label style={{color: 'green'}}> Congratulations! You answered correctly</label>
                                : ( answerConfirmed
                                    ? <label style={{color: 'red'}}> Oh no... your answer is wrong</label>
                                    : <label style={{color: 'red'}}> Oh no... your answer was not registered because you did not press confirm</label>)
                            }
                        </label>
                        <br/><br/>
                        {doneForMessage
                            ? <label style={{fontSize: 35}}> This was the last question. Now, let's see the ranking! </label>
                            : <label style={{fontSize: 35}}> Get ready for the next question! </label>
                        }
                    </Popup>
                </header>
            </div>
        </div>
    );
}