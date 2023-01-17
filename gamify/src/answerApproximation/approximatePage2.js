import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import './ApproximateQuiz.css';
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";

function ApproximationPage2() {
    const [answerClicked, setAnswerClicked] = useState(null);
    const [answerConfirmed, setAnswerConfirmed] = useState(null);
    const [time, setTime] = useState(30);
    const [answer, setAnswer] = useState('');
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();
    const goToNextPage = () => {
        navigate('/approximatePage3');
    }

    const goBack = () => {
        navigate('/approximatePage1');
    }

    const question =
        " Mauris ut lorem at dolor pulvinar pharetra eget pharetra ipsum. Vivamus fermentum in nisi vel sagittis. Sed facilisis varius elit vel semper. Duis a elit felis. In tincidunt, orci vitae congue tincidunt, sem ipsum tempus velit, sed egestas felis odio in nunc. Phasellus tempus lectus a felis lacinia semper?";


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
        setAnswerConfirmed(answer);
        setAnswer(answer);
        setDisabled(true);
    }
    const handleChange = (e) => {
        setAnswer(e.target.value);
        console.log(answer)
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
                    <h4> Page 2/3</h4>
                    <textarea className="lorem-quiz-text" rows="3" cols="100" value={question} readOnly={true}>
    </textarea>
                    <input type="number" className="textfield" placeholder="Your guess"  value={answer}  onChange={(e) =>handleChange(e)} />
                    <div>
                        <button className={answerConfirmed ? "confirm-button-clicked" : "confirm-button"} onClick={(e) => {handleChange(e); clickConfirm();}} disabled={disabled}> Confirm</button>
                    </div>
                    <div>
                        {
                            !answerConfirmed &&

                            <button className="go-back-button" onClick={goBack}> Go back</button>}

                        {answerConfirmed &&
                        <div>
                            <h3 style={{color: "red"}}> Your guess is incorrect </h3>
                            <h4>Your answer is: {answerConfirmed} <br/> Correct answer is {parseInt(answerConfirmed) + 540}</h4>
                            <button className="next-button" onClick={goToNextPage}> Next </button>
                        </div>
                        }
                    </div>
                </header>

            </div>
        </div>
    );
}
export default ApproximationPage2;

