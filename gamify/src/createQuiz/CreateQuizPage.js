import '../App.css';
import '../index.css';
import '../quiz/ClassicQuiz.css'
import './CreateQuizPage.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";

function CreateQuizPage() {
    let navigate = useNavigate();
    const [quiz, setQuiz] = useState({ questions: [] }); // Initialize the quiz state

    const handleAddQuestion = () => {
        // Add a new question to the quiz state
        setQuiz({
            questions: [
                ...quiz.questions,
                {
                    question: '',
                    answers: [
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                    ],
                },
            ],
        });
    };

    const handleQuestionChange = (e, index) => {
        // Update the question text
        const newQuestions = [...quiz.questions];
        newQuestions[index].question = e.target.value;
        setQuiz({ questions: newQuestions });
    };

    const handleAnswerChange = (e, questionIndex, answerIndex) => {
        // Update the answer text
        const newQuestions = [...quiz.questions];
        newQuestions[questionIndex].answers[answerIndex].text = e.target.value;
        setQuiz({ questions: newQuestions });
    };

    const handleCorrectAnswerChange = (e, questionIndex) => {
        // Update the correct answer
        const newQuestions = [...quiz.questions];
        newQuestions[questionIndex].answers.forEach((answer) => (answer.isCorrect = false));
        newQuestions[questionIndex].answers[e.target.value].isCorrect = true;
        setQuiz({ questions: newQuestions });
    };

    const goToNextPage = () => {
        localStorage.setItem('quiz', JSON.stringify(quiz));
        navigate('/confirmQuiz');
    };

    return (
        <div>
            <NavbarCustom />
            <SidebarSimpleMainPage />
            <div className="App" style={{ fontFamily: 'poppins' }}>
                <header className="myHeader">
                    <br />
                    <br />
                    {quiz.questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <label className="myLabel">Question:</label>
                            <input className="myQuestionInput"
                                type="text"
                                value={question.question}
                                onChange={(e) => handleQuestionChange(e, questionIndex)}
                            />
                            <br />
                            <br />
                            {question.answers.map((answer, answerIndex) => (
                                <div key={answerIndex}>
                                    <label className="myLabel">Answer {answerIndex + 1}:</label>
                                    <input className="myInput"
                                        type="text"
                                        value={answer.text}
                                        onChange={(e) => handleAnswerChange(e, questionIndex, answerIndex)}
                                    />
                                </div>
                            ))}
                            <br />
                            <label className="myLabel">Correct Answer:</label>
                            <select className="mySelect" onChange={(e) => handleCorrectAnswerChange(e, questionIndex)}>
                                {question.answers.map((answer, answerIndex) => (
                                    <option key={answerIndex} value={answerIndex}>
                                        {answerIndex + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}

                    <br />
                    <button className="myButton" onClick={handleAddQuestion}>
                        Add Question
                    </button>

                    <button className="next-button" onClick={goToNextPage}>
                        Next
                    </button>
                </header>
            </div>
        </div>
    );
}

export default CreateQuizPage;
