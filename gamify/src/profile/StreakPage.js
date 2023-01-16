import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import dayjs, {locale} from 'dayjs';
import {formatDay} from "react-calendar/src/shared/dateFormatter";


export default function StreakPage() {
    let navigate = useNavigate();

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

    const logOut = () => {
        navigate('/');
    }

    return(
        <div>
            <NavbarCustom/>
            <SidebarProfile/>
            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <h1>Congratulations on your streak!</h1>
                    <Calendar className="react-calendar" tileClassName={({ date }) => {
                        if(mark.find(x => x === date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())){
                            return  'highlight' //(in Contest.css)
                        }
                    }}
                    />
                </header>
            </div>
        </div>
    );
}
