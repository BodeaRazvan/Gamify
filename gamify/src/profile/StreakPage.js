import '../App.css';
import '../index.css';
import './Streak.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function StreakPage() {

    const mark = [
        '18-1-2023',
        '17-1-2023',
        '16-1-2023',
        '15-1-2023',
        '14-1-2023',
        '13-1-2023',
        '12-1-2023',
        '11-1-2023',
        '10-1-2023',
        '9-1-2023',
        '8-1-2023',
    ]

    return(
        <div>
            <NavbarCustom/>
            <SidebarProfile/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1 style={{color: "#a8499e"}}>Congratulations on your streak!</h1>
                    <Calendar className="react-calendar" tileClassName={({ date }) => {
                        if(mark.find(x => x === date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())){
                            return 'highlight'
                        }
                    }}
                    />
                </header>
            </div>
        </div>
    );
}
