import '../App.css';
import '../index.css';
import './ApproximateQuiz.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


function ApproximationPage1() {
    const [answerClicked, setAnswerClicked] = useState(null);
    const [answerConfirmed, setAnswerConfirmed] = useState(null);
    const [time, setTime] = useState(30);
    const [answer, setAnswer] = useState('');
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();
    const goToNextPage = () => {
        navigate('/approximatePage2');
    }

    const goBack = () => {
        navigate('/chooseCourseCategory');
    }

    const question =
        "Curabitur id quam non risus aliquet molestie non id augue. Nullam pretium ultricies tellus vel lacinia. Maecenas placerat eros eget velit tincidunt fringilla. Etiam gravida volutpat consequat. Cras sodales feugiat elit eu viverra. Vivamus ornare pulvinar eros, non dictum mauris consectetur vel?";

    const answers = [
        "mauris porta",
        "vitae interdum",
        "non magna",
        "acem commodo"
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
                    <h4> Page 1/3</h4>
                    <textarea className="lorem-quiz-text" rows="3" cols="100" value={question} readOnly={true}>
    </textarea>
                    <input type="number" className="textfield" placeholder="Your guess"  value={answer}  onChange={(e) =>handleChange(e)} />
                    <div>
                        <button className={answerConfirmed ? "confirm-button-clicked" : "confirm-button"} onClick={() => clickConfirm()} disabled={disabled}> Confirm</button>
                    </div>
                    <div>
                        {
                            !answerConfirmed &&

                        <button className="go-back-button" onClick={goBack}> Go back</button>}

                        {answerConfirmed &&
                            <div>
                                <h3 style={{color: "green"}}> Your guess is correct </h3>
                                <h4>Your answer is: {answerConfirmed} <br/> Correct answer is {answerConfirmed}</h4>
                                <button className="next-button" onClick={goToNextPage}> Next </button>
                            </div>
                                }
                    </div>
                </header>

            </div>
        </div>
    );
}
export default ApproximationPage1;

