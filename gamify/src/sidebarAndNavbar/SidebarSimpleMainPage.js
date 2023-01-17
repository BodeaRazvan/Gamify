import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";

export default function SidebarSimpleMainPage() {

    let navigate = useNavigate();

    return(
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
                <MenuItem onClick={() => {navigate("/mainPage")}}>Main Page</MenuItem>
            </Menu>
        </ProSidebar>
    );
}
