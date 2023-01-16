import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";

export default function SidebarProfile() {

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
                <MenuItem onClick={() => {}}>Menu</MenuItem>
                <SubMenu title="My Avatar">
                    <MenuItem onClick={() => navigate("/avatar")}> Create/Edit</MenuItem>
                </SubMenu>
                <SubMenu title="Trophies">
                    <MenuItem onClick={() => navigate("/admin/users")}> Trophy1 </MenuItem>
                    <MenuItem onClick={() => navigate("/admin/users")}> Trophy2 </MenuItem>
                </SubMenu>
                <SubMenu title="Stats">
                </SubMenu>
                <SubMenu title="Streak">
                </SubMenu>
                <SubMenu title="Connections" onClick={() => navigate("/connections")}>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}
