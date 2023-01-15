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

            {/* CONNECTIONS */}
            <Route path="/connections" element={<Connections/>} />

            {/* PROFILE */}
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/avatar" element={<AvatarPage/>} />


            {/* COURSE */}
            <Route path="/chooseCourseSubject" element={<ChooseSubject/>} />
            <Route path="/chooseCourseCategory" element={<ChooseCourseCategory/>} />
            <Route path="/coursePage1" element={<CoursePage1/>} />
            <Route path="/coursePage2" element={<CoursePage2/>} />
            <Route path="/coursePage3" element={<CoursePage3/>} />

        </Routes>
      </Router>
  );
}

export default App;
