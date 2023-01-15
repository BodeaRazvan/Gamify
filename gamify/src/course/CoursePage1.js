import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navbar} from "react-bootstrap";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import './CoursePage.css';

export default function CoursePage1() {
    const [errorActivated, setErrorActivated] = useState(false);

    let navigate = useNavigate();

    const goToNextPage = () => {
            navigate('/coursePage2');
    }

    const goBack = () => {
        navigate('/chooseCourseCategory');
    }

    const logOut = () => {
        navigate('/');
    }

    return (
        <div>
            <Navbar sticky="top" className="navbar" style={{fontFamily: "poppins"}}>
                <div>
                    <p className="navBarTitle" style={{display: "inline", color: "white"}}>Gamify</p>
                    <p className="navBarStreak" style={{display: "inline", color: "white"}}>Streak:
                        <p style={{display: "inline", color: "yellow"}}>
                            12 days
                        </p></p>
                    <p className="navBarNotification" style={{display: "inline", color: "white"}}>Notifications:
                        <p style={{display: "inline", color: "red"}}>
                            3
                        </p>
                    </p>
                    <button className="navbarButton" onClick={logOut}> Log out</button>
                </div>
            </Navbar>
            <ProSidebar style={{
                marginTop: 48,
                position: "fixed",
                fontFamily: "poppins",
                sticky: "top",
                width: "150px",
                minWidth: "150px",
                fontSize: "20px",
            }} className="mySideBar">
                <Menu iconShape="square">
                    <MenuItem onClick={() => {
                    }}>Menu</MenuItem>
                    <SubMenu title="Games">
                        <MenuItem onClick={() => navigate("/admin/users")}> Classic quiz</MenuItem>
                        <MenuItem onClick={() => {
                        }}> Drag & Drop</MenuItem>
                    </SubMenu>
                    <SubMenu title="Courses" onClick={() => navigate("/chooseCourseSubject")}>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <h1> Course on {localStorage.getItem("courseSubject")} > {localStorage.getItem("courseCategory")}</h1>

                    {errorActivated ?
                        <label style={{margin: 10, color: "red"}}> You have to choose a subject </label>
                        : null
                    }
                    <textarea className="lorem-text"  rows="30" cols="100"
                              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat turpis, ullamcorper eu justo sed, viverra pellentesque sem. Vestibulum aliquam, sapien ut mattis laoreet, velit ex tincidunt felis, quis dignissim augue felis ac ex. Aliquam pulvinar velit in convallis ultrices. Fusce sit amet lorem molestie, luctus turpis ac, aliquam tellus. Suspendisse potenti. Curabitur vitae magna blandit, volutpat ante nec, finibus felis. Phasellus at interdum erat. Vivamus sollicitudin fermentum lorem sed pharetra. Morbi a lacus mollis, pharetra felis ut, lobortis felis. Phasellus quis lectus aliquet, accumsan velit sit amet, egestas eros. Duis porta pulvinar augue, at ultricies magna blandit eget. Duis tempor placerat molestie. Cras auctor tincidunt tincidunt. Aliquam a erat nisi. Ut in scelerisque metus. Nunc semper egestas dolor, laoreet faucibus magna aliquet eu.
                                Proin hendrerit, nulla sit amet sagittis interdum, turpis tellus consectetur ipsum, sed tempus sapien dolor vel ex. Morbi libero dolor, congue quis lacinia vitae, ultrices vitae tellus. Maecenas sit amet aliquet lacus. Nam dui est, vestibulum eget pulvinar ut, hendrerit eget massa. Duis sagittis mollis libero ut molestie. Proin pulvinar, mi vel congue hendrerit, elit elit aliquam lacus, eget consectetur ex est in arcu. Phasellus consectetur dignissim efficitur. Praesent molestie sem ut fringilla imperdiet.

                                Aenean efficitur a augue ac imperdiet. Donec a elit at quam cursus dictum at nec turpis. Aliquam faucibus ante in dui porttitor aliquet. Nam et mauris eget est lobortis venenatis vel eu est. Phasellus sagittis mi quam, sed suscipit lorem malesuada ut. Integer posuere consequat ante, at porta orci congue vitae. Integer eu maximus diam, id consectetur nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet leo arcu. Nulla non est at quam bibendum tempus molestie malesuada leo. Vivamus sed volutpat magna, a hendrerit libero. Sed sed velit accumsan, scelerisque justo a, pretium sem. Donec tempus consectetur aliquam. Morbi ut massa ut lacus hendrerit sodales. Proin euismod hendrerit leo pretium vulputate. Sed tincidunt lectus ante, ac vehicula odio vestibulum vel.

                                Duis non libero bibendum, venenatis turpis id, tristique sapien. Sed pellentesque nisl risus, in pretium metus mattis at. Praesent rutrum nunc et enim scelerisque, in volutpat elit accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus mi turpis, laoreet ac lobortis at, euismod ac augue. Cras elementum velit tortor, et iaculis nulla facilisis non. Aenean a sodales ante, laoreet placerat leo. In hac habitasse platea dictumst. Nullam pharetra ac ex vitae vehicula. In et leo vitae magna dapibus suscipit. Proin aliquet ipsum turpis, sit amet consequat nibh sollicitudin sed. Integer et ligula ultricies, lobortis odio sit amet, posuere tellus. Nulla turpis lacus, vulputate sed dictum at, sollicitudin eu est. Suspendisse iaculis massa ac est cursus, sed sodales quam sollicitudin. Etiam suscipit, mauris id vestibulum pulvinar, orci risus mattis orci, in iaculis magna ante vitae felis.

                                Pellentesque justo ex, accumsan tempus aliquam quis, egestas ut magna. Nulla et nulla posuere, venenatis justo id, luctus sapien. Aliquam accumsan vehicula eros et efficitur. Nulla ut lacus massa. Integer non velit et sem consectetur malesuada id vitae risus. Integer et odio faucibus, mollis elit in, laoreet massa. Praesent lobortis dui at turpis accumsan sodales. Mauris mattis mi mi, vitae lobortis lectus convallis sed. Vestibulum in sapien et nisl ornare interdum. Suspendisse orci libero, viverra nec magna sit amet, consequat finibus neque."
                              readOnly={true}>
                    </textarea>
                    <h4 style={{color: "white"}} > Page 1/3 </h4>
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button" onClick={goToNextPage}> Next page </button>
                    </div>


                </header>
            </div>
        </div>
    );

}