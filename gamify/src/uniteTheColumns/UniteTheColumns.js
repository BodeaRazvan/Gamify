import LineTo from 'react-lineto';

import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import GenerateAvatar from "../avatar/GenerateAvatar";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";

function UniteTheColumns() {

    const [startRef1, setStartRef1] = useState("");
    const [endRef1, setEndRef1] = useState("");
    const [startRef2, setStartRef2] = useState("");
    const [endRef2, setEndRef2] = useState("");
    const [startRef3, setStartRef3] = useState("");
    const [endRef3, setEndRef3] = useState("");

    const [clickedOption, setClickedOption] = useState("");
    const [alreadyClickedA, setAlreadyClickedA] = useState(false);
    const [alreadyClickedB, setAlreadyClickedB] = useState(false);
    const [alreadyClickedC, setAlreadyClickedC] = useState(false);

    let navigate = useNavigate();

    const handleDivClick1 = () => {
        setStartRef1("D")
        if(clickedOption === "D"){
            setClickedOption("")
        }
        if(clickedOption === "E"){
            setEndRef1("")
        }
        if(clickedOption === "F"){
            setEndRef1("")
        }
        if(clickedOption === "A" && !alreadyClickedA){
            setEndRef1("A")
            setAlreadyClickedA(true)
        }
        if(clickedOption === "B" && !alreadyClickedB){
            setEndRef1("B")
            setAlreadyClickedB(true)
        }
        if(clickedOption === "C" && !alreadyClickedC){
            setEndRef1("C")
            setAlreadyClickedC(true)
        }
    }

    const handleDivClick2 = () => {
        setStartRef2("E")
        if(clickedOption === "D"){
            setEndRef2("")
        }
        if(clickedOption === "E"){
            setClickedOption("")
        }
        if(clickedOption === "F"){
            setEndRef2("")
        }
        if(clickedOption === "A" && !alreadyClickedA){
            setEndRef2("A")
            setAlreadyClickedA(true)
        }
        if(clickedOption === "B" && !alreadyClickedB){
            setEndRef2("B")
            setAlreadyClickedB(true)
        }
        if(clickedOption === "C" && !alreadyClickedC){
            setEndRef2("C")
            setAlreadyClickedC(true)
        }
    }
    const handleDivClick3 = () => {
        setStartRef3("F")
        if(clickedOption === "D"){
            setEndRef3("")
        }
        if(clickedOption === "E"){
            setEndRef3("")
        }
        if(clickedOption === "F"){
            setClickedOption("")
        }
        if(clickedOption === "A" && !alreadyClickedA){
            setEndRef3("A")
            setAlreadyClickedA(true)
        }
        if(clickedOption === "B" && !alreadyClickedB){
            setEndRef3("B")
            setAlreadyClickedB(true)
        }
        if(clickedOption === "C" && !alreadyClickedC){
            setEndRef3("C")
            setAlreadyClickedC(true)
        }
    }

    const [seconds, setSeconds] = useState(60);
    const [finished, setFinished] = useState(false);

    const Timer = () => {

        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
            if(seconds <= 0){
                setSeconds(60);
                setFinished(true);
                setSeconds(10);
                setTimeout(() => {navigate("/uniteTheColumnsQuiz2")},10000);
                checkAnswers();
            }
            return () => clearInterval(interval);
        }, []);

        return <div style={{position:"absolute",top:"7%"}}>{seconds} seconds left</div>;
    }

    const resetColumns = () => {
        setStartRef1("")
        setEndRef1("")
        setStartRef2("")
        setEndRef2("")
        setStartRef3("")
        setEndRef3("")
        setAlreadyClickedA(false)
        setAlreadyClickedB(false)
        setAlreadyClickedC(false)
    }

    const [colorA, setColorA] = useState("black");
    const [colorB, setColorB] = useState("black");
    const [colorC, setColorC] = useState("black");

    const checkAnswers = () => {
        if(startRef1 === "D" && endRef1 === "B"){
            setColorA("green")
        }else{
            setColorA("red")
        }
        if(startRef2 === "E" && endRef2 === "A"){
            setColorB("green")
        }else{
            setColorB("red")
        }
        if(startRef3 === "F" && endRef3 === "C"){
            setColorC("green")
        }else{
            setColorC("red")
        }
    }

    return(
        <div>
            <NavbarCustom/>

            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <Timer/>
                    <div style={{position:"absolute", top:"15%"}}>
                    Unite the columns
                    </div>
                    <div>

                        <div style={{position:"absolute",left:"15%", top:"40%"}}>
                        <div style={{maxWidth:"400px"}} onClick={() => setClickedOption("A")} className="A">Who invented the spinning cup anemometer?</div>
                        <br/>  <br/>
                        <div style={{maxWidth:"400px"}} onClick={() => setClickedOption("B")} className="B">Who was the first person to design models of flying machine?</div>
                        <br/>  <br/>
                        <div style={{maxWidth:"400px"}} onClick={() => setClickedOption("C")} className="C">Who invented Aqua-Lung?</div>
                        <br/>
                        </div>

                        <div style={{position:"absolute",left:"70%", top:"40%"}}>
                        <div style={{maxWidth:"400px"}} onClick={() => handleDivClick1()} className="D">Leonardo da Vinci</div>
                        <br/>  <br/>
                        <div style={{maxWidth:"400px"}} onClick={() => handleDivClick2()} className="E">Thomas Romney Robinson (1846)</div>
                        <br/>  <br/>
                        <div style={{maxWidth:"400px"}} onClick={() => handleDivClick3()} className="F">Jacques Cousteau (1943)</div>
                        </div>

                        {startRef1 && endRef1 && (
                            <LineTo
                                from={startRef1}
                                to={endRef1}
                                borderColor={colorA}
                                borderWidth="3"
                            />
                        )}

                        {startRef2 && endRef2 && (
                            <LineTo
                                from={startRef2}
                                to={endRef2}
                                borderColor={colorB}
                                borderWidth="3"
                            />
                        )}

                        {startRef3 && endRef3 && (
                            <LineTo
                                from={startRef3}
                                to={endRef3}
                                borderColor={colorC}
                                borderWidth="3"
                            />
                        )}

                    </div>

                    <button style={{position:"absolute",top:"80%"}} className={"myButton"}
                            onClick={() => {
                                setSeconds(10);
                                setTimeout(() => {navigate("/uniteTheColumnsQuiz2")},10000);
                                checkAnswers()
                            }}
                    > Confirm </button>

                    <button style={{position:"absolute",top:"20%"}} className={"myButton"}
                            onClick={() => {
                                if(!finished){
                                resetColumns();
                                }
                            }}
                    > Reset </button>

                </header>
            </div>
        </div>
    );
}

export default UniteTheColumns;