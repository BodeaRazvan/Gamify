import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navbar} from "react-bootstrap";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import './CoursePage.css';

export default function CoursePage2() {

    let navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/coursePage3');
    }

    const goBack = () => {
        navigate('/coursePage1');
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

                    <textarea className="lorem-text"  rows="30" cols="100"
                              value="Vestibulum pretium mauris eget leo rhoncus, et bibendum augue lacinia. In dignissim ligula porta tristique pellentesque. Fusce aliquam enim non lectus commodo dapibus. Curabitur semper lorem eros, porttitor sollicitudin erat gravida quis. Phasellus tempus dui ac nulla volutpat, at facilisis tortor viverra. Integer efficitur nisl non leo ultrices, ut ullamcorper arcu iaculis. Sed mi metus, feugiat a consectetur in, condimentum sit amet dolor. Proin ut lacus auctor, aliquam augue id, maximus lacus. Maecenas quis nisl varius ante faucibus condimentum. Sed tincidunt vitae dui vitae euismod.

                              Nulla pellentesque neque eget aliquet rhoncus. Praesent in ipsum sapien. Donec eget sapien leo. Ut mollis purus elementum enim imperdiet condimentum. Aliquam tincidunt euismod erat, non aliquet ligula lacinia sed. Donec viverra ultricies dolor, sit amet mattis dolor tincidunt quis. In eget ligula eu urna bibendum tincidunt. In placerat, eros id porttitor placerat, elit urna mollis quam, in dictum eros mi ut libero. Maecenas lobortis velit ac magna mattis pretium.

                              Sed eget erat pulvinar, pharetra enim ut, mattis quam. Suspendisse ac dignissim felis. Fusce a sollicitudin erat. Sed eu dapibus turpis. Nam et nisl vel massa placerat laoreet eu sed odio. Aliquam erat magna, semper id mollis in, hendrerit mattis ipsum. Donec tincidunt nisl tempor rutrum interdum. Nullam quis justo a mauris faucibus vulputate et quis risus. Curabitur egestas sodales posuere. Sed at ante sit amet leo tristique maximus. Vivamus ac porttitor ex. Aliquam aliquam varius ex, fermentum gravida ante commodo quis.

                              Curabitur egestas diam a est maximus interdum. Cras at sollicitudin dui, dictum aliquet tellus. Sed euismod malesuada ante eget feugiat. Suspendisse nec sem nec felis auctor viverra vitae nec nisi. Mauris interdum dui id sem volutpat molestie. Duis gravida dui quis purus luctus, sit amet semper felis aliquam. Nullam porttitor interdum placerat. Duis posuere lectus sed nunc tincidunt laoreet. Nunc quis urna consequat, vestibulum lectus vulputate, venenatis sem.

                              In vel ex convallis, laoreet tellus sit amet, maximus tortor. Phasellus sit amet risus dolor. Donec molestie luctus consectetur. Vivamus rutrum nunc in eros pretium ullamcorper. Donec sit amet risus a ex varius malesuada ac vel elit. Nunc lacinia ex a nibh mollis accumsan. Nunc viverra auctor enim vel sodales. Praesent elit mi, accumsan non sapien ut, tincidunt mattis nisl. Fusce aliquet, tellus sit amet condimentum suscipit, tellus metus tempor lectus, nec pellentesque ex orci et risus. Cras non purus non orci lacinia placerat ac id est..
                              Cras ultricies finibus aliquet. Etiam interdum elit nec elit luctus hendrerit. Donec condimentum non sapien nec feugiat. Curabitur lobortis auctor ex quis tempor. Ut at congue erat. Donec porttitor eros non elit scelerisque gravida eget sed ex. Vestibulum volutpat, ante at aliquam porttitor, diam sem bibendum purus, id consequat sem sem vel ligula. Donec imperdiet sapien non fringilla consectetur. Donec non libero in mauris dictum tempor."
                              readOnly={true}>
                    </textarea>
                    <h4 style={{color: "white"}} > Page 2/3 </h4>
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button" onClick={goToNextPage}> Next page </button>
                    </div>


                </header>
            </div>
        </div>
    );

}