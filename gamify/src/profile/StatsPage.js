import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React, {useState} from "react";
import './StatsPage.css';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarProfile from "../sidebarAndNavbar/SidebarProfile";
function StatsPage() {

    return(
        <div>
            <NavbarCustom/>
            <SidebarProfile/>

            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <div className="rectangularsContainer">
                        <h1 style={{color: "white"}}> Your stats </h1>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>
                                Quizzes taken: 24 <br/>
                                Most played category:  Science
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Contests Won: 5</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#ff9100"}}>
                                Courses Taken: 12 <br/>
                                Courses in progress: 2
                            </div>
                            <div className="rectangular" style={{backgroundColor: "#ff9100"}}>Number of friends: 17</div>
                        </div>
                        <div className="rectangularRow">
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Number of button clicks: 567</div>
                            <div className="rectangular" style={{backgroundColor: "#A31ACB"}}>Your average quiz score is in our top 5% </div>
                        </div>

                        <h1 style={{color: "white"}}> Keep up the good work! </h1>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default StatsPage;