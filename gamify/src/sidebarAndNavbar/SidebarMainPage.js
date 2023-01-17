import '../App.css';
import '../index.css';
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";

export default function SidebarMainPage() {

    let navigate = useNavigate();

    return(
        <div>
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
                    <MenuItem onClick={() => {}}>Menu</MenuItem>
                    <SubMenu title="Profile" onClick={() => navigate("/profile")}>
                    </SubMenu>
                    <SubMenu title="Games">
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","1");navigate("/chooseCourseSubject")}}> Classic quiz</MenuItem>
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","2");navigate("/chooseCourseSubject")}}> Approximate</MenuItem>
                        <MenuItem onClick={() =>  {localStorage.setItem("gameOption","3");navigate("/chooseCourseSubject")}}> Columns</MenuItem>
                        <MenuItem onClick={() => {localStorage.setItem("gameOption","4");navigate("/chooseCourseSubject")}}> Drag & Drop</MenuItem>
                    </SubMenu>
                    <SubMenu title="Courses" onClick={() => {localStorage.setItem("gameOption","5");navigate("/chooseCourseSubject")}}>
                    </SubMenu>
                    <SubMenu title="Contest" onClick={() => navigate("/contest")}>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
}
