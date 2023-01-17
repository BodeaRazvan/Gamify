import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useEffect} from "react";


function GenerateAvatar() {
    let navigate = useNavigate();

    const face5 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063776548819312770/Face6.png"
    const face4 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063776548592832552/Face5.png"
    const face3= "https://cdn.discordapp.com/attachments/1063774105096179722/1063776547464552548/Face4.png"
    const face2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063776547724607528/Face3.png"
    const face1= "https://cdn.discordapp.com/attachments/1063774105096179722/1063776548290830497/Face1.png"
    const face0 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063783831376756836/avatar.png"

    const face6 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063785413233356880/girl1.png"
    const face7 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063785413006872627/girl2.png"
    const face8 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063785412818116669/girl3.png"
    const face9 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063785412579045396/girl4.png"
    const face10 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063785412352561204/girl5.png"

    const hat1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063788672203378688/hat1.png"
    const hat2= "https://cdn.discordapp.com/attachments/1063774105096179722/1063792803987062814/hat2.png"
    const hat3 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063795128369692672/hat3.png"
    const hat4 = "https://cdn.discordapp.com/attachments/1063774105096179722/1063795553047167016/hat4.png"


    const trophy1 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262082888994856/T1.png"
    const trophy2 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084868706394/T2.png"
    const trophy3 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084663197696/T3.png"
    const trophy4 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084411543562/T4.png"
    const trophy5 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262084143091835/T5.png"
    const trophy6 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083874672751/T6.png"
    const trophy7 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083622998186/T7.png"
    const trophy8 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083333603348/T8.png"
    const trophy9 = "https://cdn.discordapp.com/attachments/1063774105096179722/1064262083115503626/T9.png"

    const [faceImage,setFaceImage] = React.useState(0);
    const [hatImage,setHatImage] = React.useState(0);
    const [trophyImage,setTrophyImage] = React.useState(0);

    useEffect(() => {
        setFaceImage(parseInt(localStorage.getItem("face")));
        setHatImage(parseInt(localStorage.getItem("hat")));
        setTrophyImage(parseInt(localStorage.getItem("trophy")));
    },[]);

    return(
        <div onClick={() => navigate("/profile")} className="profileAvatar">
            <p>
                {
                    faceImage === 0 ? <img src={face0} alt="face0" style={{width:"200px", height:"200px"}}/>:
                        faceImage === 1 ? <img src={face1} alt="face1" style={{width:"200px", height:"200px"}}/>:
                            faceImage === 2 ? <img src={face2} alt="face2" style={{width:"200px", height:"200px"}}/>:
                                faceImage === 3 ? <img src={face3} alt="face3" style={{width:"200px", height:"200px"}}/>:
                                    faceImage === 4 ? <img src={face4} alt="face4" style={{width:"200px", height:"200px"}}/>:
                                        faceImage === 5 ? <img src={face5} alt="face5" style={{width:"200px", height:"200px"}}/>:
                                            faceImage === 6 ? <img src={face6} alt="face6" style={{width:"200px", height:"200px"}}/>:
                                                faceImage === 7 ? <img src={face7} alt="face7" style={{width:"200px", height:"200px"}}/>:
                                                    faceImage === 8 ? <img src={face8} alt="face8" style={{width:"200px", height:"200px"}}/>:
                                                        faceImage === 9 ? <img src={face9} alt="face9" style={{width:"200px", height:"200px"}}/>:
                                                            faceImage === 10 ? <img src={face10} alt="face10" style={{width:"200px", height:"200px"}}/>:null
                }
            </p>
            <p style={{position:"relative",top:"-235px", left:"0px"}}>
                {
                    hatImage === 0 ? null:
                        hatImage === 1 ? <img src={hat1} alt="hat1" style={{width:"80px", height:"80px"}}/>:
                            hatImage === 2 ? <img src={hat2} alt="hat2" style={{width:"80px", height:"80px"}}/>:
                                hatImage === 3 ? <img src={hat3} alt="hat3" style={{width:"80px", height:"80px"}}/>:
                                    hatImage === 4 ? <img src={hat4} alt="hat4" style={{width:"80px", height:"80px"}}/>:null

                }
            </p>

            <p style={{position:"relative",top:"-290px", left:"-60px"}}>
                {
                    trophyImage === 0 ? null:
                        trophyImage === 1 ? <img src={trophy1} alt="trophy1" style={{width:"50px", height:"80px"}}/>:
                            trophyImage === 2 ? <img src={trophy2} alt="trophy2" style={{width:"50px", height:"80px"}}/>:
                                trophyImage === 3 ? <img src={trophy3} alt="trophy3" style={{width:"50px", height:"80px"}}/>:
                                    trophyImage === 4 ? <img src={trophy4} alt="trophy4" style={{width:"50px", height:"80px"}}/>:
                                        trophyImage === 5 ? <img src={trophy5} alt="trophy5" style={{width:"50px", height:"80px"}}/>:
                                            trophyImage === 6 ? <img src={trophy6} alt="trophy6" style={{width:"50px", height:"80px"}}/>:
                                                trophyImage === 7 ? <img src={trophy7} alt="trophy7" style={{width:"50px", height:"80px"}}/>:
                                                    trophyImage === 8 ? <img src={trophy8} alt="trophy8" style={{width:"50px", height:"80px"}}/>:
                                                        trophyImage === 9 ? <img src={trophy9} alt="trophy9" style={{width:"50px", height:"80px"}}/>:null
                }
            </p>
        </div>
    )

}

export default GenerateAvatar;