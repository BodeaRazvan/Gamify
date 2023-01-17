import '../App.css';
import '../index.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React from "react";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import Draggable from "react-draggable";

export default function SidebarProfile() {

    const trophy1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262082888994856/T1.png"
    const trophy2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084868706394/T2.png"
    const trophy3 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084663197696/T3.png"
    const trophy4 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084411543562/T4.png"
    const trophy5 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084143091835/T5.png"
    const trophy6 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083874672751/T6.png"
    const trophy7 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083622998186/T7.png"
    const trophy8 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083333603348/T8.png"
    const trophy9 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083115503626/T9.png"

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
                <SubMenu title="My Avatar">
                    <MenuItem onClick={() => navigate("/avatar")}> Create/Edit</MenuItem>
                </SubMenu>
                <SubMenu title="Trophies">
                    <MenuItem style={{maxHeight:"400px", overflow:"auto"}}>
                        <Draggable>
                            <img onClick={() => {localStorage.setItem('trophy',1);window.location.reload()}} src={trophy1} alt="trophy1" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img onClick={() => {localStorage.setItem('trophy',2);window.location.reload()}} src={trophy2} alt="trophy2" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',3);window.location.reload()}} src={trophy3} alt="trophy3" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',4);window.location.reload()}} src={trophy4} alt="trophy4" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img onClick={() => {localStorage.setItem('trophy',5);window.location.reload()}} src={trophy5} alt="trophy5" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',6);window.location.reload()}} src={trophy6} alt="trophy6" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',7);window.location.reload()}} src={trophy7} alt="trophy7" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',8);window.location.reload()}} src={trophy8} alt="trophy8" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                        <br/>
                        <Draggable>
                            <img  onClick={() => {localStorage.setItem('trophy',9);window.location.reload()}} src={trophy9} alt="trophy9" style={{width: "50px", height: "80px"}}/>
                        </Draggable>
                    </MenuItem>

                </SubMenu>
                <SubMenu title="Stats" onClick={() => {navigate("/stats")}}>
                </SubMenu>
                <SubMenu title="Streak" onClick={() => {navigate("/streak")}}>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}
