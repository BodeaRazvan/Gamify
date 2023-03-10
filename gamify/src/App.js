import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import React from "react";
import './App.css';
import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import HomePage from "./mainPage/HomePage";
import MainPage from "./mainPage/MainPage";
import Contest from "./contest/Contest";
import ChoiceOfContestants from "./contest/ChoiceOfContestants";
import WaitingForPeople from "./contest/WaitingForPeople";
import ChooseFriends from "./contest/ChooseFriends";

import ContestGettingReady from "./contest/ContestGettingReady";

import UserProfile from "./profile/UserProfile";
import AvatarPage from "./profile/AvatarPage";
import ChooseSubject from "./course/ChooseSubject";
import ChooseCourseCategory from "./course/ChooseCourseCategory";
import CoursePage1 from "./course/CoursePage1";
import CoursePage2 from "./course/CoursePage2";
import CoursePage3 from "./course/CoursePage3";

import Connections from "./connections/Connections";
import ContestProgress from "./contest/ContestProgress";
import RankingPage from "./contest/RankingPage";
import StreakPage from "./profile/StreakPage";

import StatsPage from "./profile/StatsPage";
import ClassicQuizPage1 from "./quiz/ClassicQuizPage1";
import ClassicQuiz from "./quiz/ClassicQuiz";
import ClassicQuizPage2 from "./quiz/ClassicQuizPage2";
import ClassicQuizPage3 from "./quiz/ClassicQuizPage3";
import DragAndDrop from "./dragAndDrop/DragAndDrop";
import GoodJobPage from "./quiz/GoodJobPage";

import UniteTheColumns from "./uniteTheColumns/UniteTheColumns";
import UniteTheColumns2 from "./uniteTheColumns/UniteTheColumns2";
import ApproximationPage1 from "./answerApproximation/approximatePage1";
import ApproximationPage2 from "./answerApproximation/approximatePage2";
import ApproximationPage3 from "./answerApproximation/approximatePage3";
import CreateQuiz from "./createQuiz/CreateQuiz";
import CreateQuizPage from "./createQuiz/CreateQuizPage";
import ConfirmQuiz from "./createQuiz/ConfirmQuiz";
import StartNewQuiz from "./createQuiz/StartNewQuiz";
import GoodJobNewQuiz from "./createQuiz/GoodJobNewQuiz";




function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/mainPage" element={<MainPage/>} />

            {/* CONTEST */}
            <Route path="/contest" element={<Contest/>} />
            <Route path="/choiceOfContestants" element={<ChoiceOfContestants/>} />
            <Route path="/waitingForPeople" element={<WaitingForPeople/>} />
            <Route path="/chooseFriends" element={<ChooseFriends/>} />
            <Route path="/contestGettingReady" element={<ContestGettingReady/>} />
            <Route path="/contestProgress" element={<ContestProgress/>} />
            <Route path="/rankingPage" element={<RankingPage />} />

            {/* CONNECTIONS */}
            <Route path="/connections" element={<Connections/>} />

            {/* PROFILE */}
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/avatar" element={<AvatarPage/>} />

            <Route path="/streak" element={<StreakPage/>} />

            <Route path="/stats" element={<StatsPage/>} />


            {/* COURSE */}
            <Route path="/chooseCourseSubject" element={<ChooseSubject/>} />
            <Route path="/chooseCourseCategory" element={<ChooseCourseCategory/>} />
            <Route path="/coursePage1" element={<CoursePage1/>} />
            <Route path="/coursePage2" element={<CoursePage2/>} />
            <Route path="/coursePage3" element={<CoursePage3/>} />

            {/* QUIZ */}
            <Route path="/classicQuiz" element={<ClassicQuiz/>} />
            <Route path="/classicQuizPage1" element={<ClassicQuizPage1/>} />
            <Route path="/classicQuizPage2" element={<ClassicQuizPage2/>} />
            <Route path="/classicQuizPage3" element={<ClassicQuizPage3/>} />
            <Route path="/goodJob" element={<GoodJobPage/>} />

            {/* CREATE QUIZ */}
            <Route path="/createQuiz" element={<CreateQuiz/>} />
            <Route path="/createQuizPage" element={<CreateQuizPage />} />
            <Route path="/confirmQuiz" element={<ConfirmQuiz />} />
            <Route path="/startNewQuiz" element={<StartNewQuiz />} />
            <Route path="/goodJobNewQuiz" element={<GoodJobNewQuiz/>} />

            {/* Drag & Drop quizz */}
            <Route path="/dragAndDropQuiz" element={<DragAndDrop/>} />

            {/* Unite the columns quiz */}
            <Route path="/uniteTheColumnsQuiz" element={<UniteTheColumns/>} />
            <Route path="/uniteTheColumnsQuiz2" element={<UniteTheColumns2/>} />


            {/* Approximate quizz */}
            <Route path="/approximatePage1" element={<ApproximationPage1/>} />
            <Route path="/approximatePage2" element={<ApproximationPage2/>} />
            <Route path="/approximatePage3" element={<ApproximationPage3/>} />
        </Routes>
      </Router>
  );
}

export default App;
