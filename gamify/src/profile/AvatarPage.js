import '../App.css';
import '../index.css';
import {Navbar} from "react-bootstrap";
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate} from "react-router";
import React, {useState} from "react";


function AvatarPage() {
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

    const [faceImage, setFaceImage] = useState(0);
    const [hatImage, setHatImage] = useState(0);


    let navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToRegister = () => {
        navigate('/register');
    }

    const logOut = () => {
        navigate('/');
    }

    const createAvatar = () => {
        localStorage.setItem("face", faceImage);
        localStorage.setItem("hat", hatImage);
        navigate('/profile');
    }


    return(
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
                    <MenuItem onClick={() => {}}>Menu</MenuItem>
                    <SubMenu title="Trophies">
                        <MenuItem onClick={() => navigate("/admin/users")}> Trophy1 </MenuItem>
                        <MenuItem onClick={() => navigate("/admin/users")}> Trophy2 </MenuItem>
                    </SubMenu>
                    <SubMenu title="Stats">
                        <MenuItem onClick={() => navigate("/stats")}> View Stats</MenuItem>
                    </SubMenu>
                    <SubMenu title="Streak">
                    </SubMenu>
                </Menu>
            </ProSidebar>


            <div className="App" style={{fontFamily:"poppins"}}>
                <header className="myHeader">
                    <br/>  <br/>  <br/>
                    <div>
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

                    </div>
                    Choose your avatar:
                    <br/>
                  <form>
                      <label >
                      <input
                          type="radio"
                          id="face1"
                          name="face"
                          value="face1"
                          checked={faceImage === 1}
                          onChange={() => setFaceImage(1)}
                      />
                          <img style={{width:"300px", height:"300px"}} src={face1} alt="1 Image" />
                      </label>
                      <label >
                      <input
                          type="radio"
                          id="face2"
                          name="face"
                          value="face2"
                          checked={faceImage === 2}
                          onChange={() => setFaceImage(2)}
                      />
                          <img style={{width:"300px", height:"300px"}} src={face2} alt="2 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face3"
                              name="face"
                              value="face3"
                              checked={faceImage === 3}
                              onChange={() => setFaceImage(3)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face3} alt="3 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face4"
                              name="face"
                              value="face4"
                              checked={faceImage === 4}
                              onChange={() => setFaceImage(4)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face4} alt="4 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face5"
                              name="face"
                              value="face5"
                              checked={faceImage === 5}
                              onChange={() => setFaceImage(5)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face5} alt="5 Image" />
                      </label>
                      <br/>
                      <label >
                          <input
                              type="radio"
                              id="face6"
                              name="face"
                              value="face6"
                              checked={faceImage === 6}
                              onChange={() => setFaceImage(6)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face6} alt="6 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face7"
                              name="face"
                              value="face7"
                              checked={faceImage === 7}
                              onChange={() => setFaceImage(7)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face7} alt="7 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face8"
                              name="face"
                              value="face8"
                              checked={faceImage === 8}
                              onChange={() => setFaceImage(8)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face8} alt="8 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face9"
                              name="face"
                              value="face9"
                              checked={faceImage === 9}
                              onChange={() => setFaceImage(9)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face9} alt="9 Image" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="face10"
                              name="face"
                              value="face10"
                              checked={faceImage === 10}
                              onChange={() => setFaceImage(10)}
                          />
                          <img style={{width:"300px", height:"300px"}} src={face10} alt="10 Image" />
                      </label>
                      <br/>  <br/>  <br/>
                      Choose a hat:
                      <br/>
                      <label >
                          <input
                              type="radio"
                              id="hat1"
                              name="hat"
                              value="hat1"
                              checked={hatImage === 1}
                              onChange={() => setHatImage(1)}
                          />
                          <img  style={{width:"300px", height:"300px"}} src={hat1} alt="1 Hat" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="hat2"
                              name="hat"
                              value="hat2"
                              checked={hatImage === 2}
                              onChange={() => setHatImage(2)}
                          />
                          <img  style={{width:"300px", height:"300px"}} src={hat2} alt="2 Hat" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="hat3"
                              name="hat"
                              value="hat3"
                              checked={hatImage === 3}
                              onChange={() => setHatImage(3)}
                          />
                          <img  style={{width:"300px", height:"300px"}} src={hat3} alt="3 Hat" />
                      </label>
                      <label >
                          <input
                              type="radio"
                              id="hat4"
                              name="hat"
                              value="hat4"
                              checked={hatImage === 4}
                              onChange={() => setHatImage(4)}
                          />
                          <img  style={{width:"300px", height:"300px"}} src={hat4} alt="4 Hat" />
                      </label>
                  </form>
                    <br/> <br/> <br/> <br/>
                    <button className="myButton"  onClick={() => {createAvatar()}}> Confirm </button>
                    <br/> <br/> <br/> <br/>
                </header>
            </div>
        </div>
    );
}

export default AvatarPage;