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

            {/* PROFILE */}
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/avatar" element={<AvatarPage/>} />

        </Routes>
      </Router>
  );
}

export default App;
