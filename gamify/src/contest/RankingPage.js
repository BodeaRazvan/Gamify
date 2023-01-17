import '../App.css';
import '../index.css';
import '../connections/Connections.css'
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {useState} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import {useEffect} from "react";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";


export default function RankingPage() {

    const [subject] = useState(JSON.parse(localStorage.getItem("subjectForContest")));
    const [contestMode] = useState(JSON.parse(localStorage.getItem("contestMode")));
    const [noOfPlayers, setNoOfPlayers] =  useState(JSON.parse(localStorage.getItem("numberOfPlayers")));
    const [noOfCorrectAnswers, setNoOfCorrectAnswers] =  useState(JSON.parse(localStorage.getItem("noOfCorrectAnswers")));
    const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players")));
    const [randomUsers, setRandomUsers] = useState(JSON.parse(localStorage.getItem("strangers")));

    const [firstPlace, setFirstPlace] = useState('');
    const [secondPlace, setSecondPlace] = useState('');
    const [thirdPlace, setThirdPlace] = useState('');

    const [rankingList, setRankingList] = useState([]);

    console.log(players)

    let navigate = useNavigate();

    const exit = () => {
        navigate('/mainPage');
    }

    useEffect(() => {
        let index = 0;
        const updatedRankingList = rankingList.map(player => {
            if(index === 0){
                setFirstPlace(player.username)
            } else if (index === 1){
                setSecondPlace(player.username)
            } else if(index === 2){
                setThirdPlace(player.username)
            }
            index = index + 1;
            return {...player, index: index};
        })
        setRankingList(updatedRankingList)
    }, [rankingList.length])

    console.log(firstPlace)

    console.log(rankingList)

    useEffect(() => {
        if(noOfCorrectAnswers === 3){
            const tempList1 = rankingList.concat({username: "you", joined: true});
            const tempList2 = tempList1.concat(players);
            setRankingList(tempList2);
        }else if(noOfCorrectAnswers === 2){
            const tempList1 = rankingList.concat(players.at(0));
            const tempList2 = tempList1.concat({username: "you", joined: true});
            const tempList3 = tempList2.concat(players.slice(1,players.length));
            setRankingList(tempList3);
        } else if(noOfCorrectAnswers === 1){
            const tempList1 = rankingList.concat(players.at(0));
            const tempList2 = tempList1.concat(players.at(1));
            const tempList3 = tempList2.concat({username: "you", joined: true})
            const tempList4 = tempList3.concat(players.slice(2,players.length));
            setRankingList(tempList4);
        } else if(noOfCorrectAnswers === 0){
            const tempList1 = rankingList.concat(players);
            const tempList2 = tempList1.concat({username: "you", joined: true});
            setRankingList(tempList2);
        }
    }, [])

    return(
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1> Congratulations! </h1>
                    <div className="container podium">
                        <div className="podium__item">
                            <p className="podium__city">
                                <b>{secondPlace === "you"
                                    ? <label style={{color: "red"}}>{secondPlace}</label>
                                    : <label>{secondPlace}</label> }
                                </b>
                            </p>
                            <div className="podium__rank second">2</div>
                        </div>
                        <div className="podium__item">
                            <p className="podium__city">
                                <b>{firstPlace === "you"
                                    ? <label style={{color: "red"}}>{firstPlace}</label>
                                    : <label>{firstPlace}</label>}
                                </b>
                            </p>
                            <div className="podium__rank first">1</div>
                        </div>
                        <div className="podium__item">
                            <p className="podium__city">
                                <b>{thirdPlace === "you"
                                    ? <label style={{color: "red"}}>{thirdPlace}</label>
                                    : <label>{thirdPlace}</label>}
                                </b>
                            </p>
                            <div className="podium__rank third">3</div>
                        </div>
                    </div>
                    <ul className="podium-list">
                        {rankingList.slice(3,rankingList.length).map(({username, index}) => {
                            return (
                                <li style={{listStyle: "none", fontSize: 25}}>
                                    <b>
                                        {username === "you"
                                            ? <label style={{color: "red"}}>{index}: {username}</label>
                                            : <label>{index}: {username}</label>}
                                    </b>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="go-back-button" onClick={exit}> Exit </button>
                </header>
            </div>
        </div>
    );
}