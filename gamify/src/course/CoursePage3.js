import React, {useState} from "react";
import {useNavigate} from "react-router";
import './CoursePage.css';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";

export default function CoursePage2() {

    let navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/mainpage');
    }

    const goBack = () => {
        navigate('/coursePage2');
    }

    return (
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <h1 style={{color: "#1ebbd0"}}> Course on {localStorage.getItem("courseSubject")} > {localStorage.getItem("courseCategory")}</h1>

                    <textarea className="lorem-text"  rows="30" cols="100"
                              value="Sed vehicula commodo risus, ut malesuada nisl sagittis vitae. Cras ut velit at mauris molestie lobortis non vitae erat. Fusce eu lobortis orci. Fusce volutpat leo at mi varius, non elementum ligula interdum. Maecenas in enim id libero sagittis euismod ac in nibh. Morbi ex orci, dictum et aliquet vel, molestie egestas mauris. Aliquam cursus ante sem, ut efficitur nulla mattis quis. Mauris tristique arcu quis mi ultrices, ut hendrerit magna feugiat. Ut ut est posuere, gravida ligula mollis, pellentesque augue. Donec ut bibendum diam, eget malesuada leo.

                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras at purus ac sapien eleifend faucibus. Integer lectus enim, accumsan in libero at, scelerisque interdum nunc. Nam elementum urna a risus lacinia, eu egestas leo suscipit. Sed dapibus tempus urna, rutrum fringilla nulla posuere in. Integer lacinia magna sapien, a commodo elit euismod nec. In eu augue id tortor ullamcorper semper. Nullam a sem nec magna tincidunt consectetur. Sed auctor sapien ut dui scelerisque, ut tristique lectus tempor. Vivamus eu lectus dignissim, semper nunc sed, venenatis enim. Quisque condimentum massa lacus, eu fermentum ipsum tempor vitae.

                                Donec id tempus tellus. Proin laoreet arcu eget nulla lobortis convallis. Aenean ac arcu vulputate, pharetra nulla eget, convallis tellus. Mauris pretium metus mi, at posuere dolor vehicula ut. Nullam congue, augue vitae accumsan fermentum, lacus ex sodales mauris, non viverra nulla augue scelerisque sem. Nunc blandit et est ac egestas. Vestibulum ac tempus arcu. Phasellus pellentesque ligula congue metus vulputate condimentum. Etiam porttitor velit eu neque laoreet, eu eleifend mauris mattis. Proin sagittis magna et felis pellentesque aliquam quis et augue. Praesent convallis sem a commodo imperdiet. Donec iaculis mattis sem, ut aliquam nisi pretium nec. Suspendisse aliquet est sit amet lacus sagittis facilisis. Aenean non congue dui, nec ultricies est. Donec ut orci vestibulum, tempor sapien sed, rhoncus risus. Proin cursus et sapien sit amet dictum.

                                Suspendisse potenti. Quisque eget dictum nibh, nec tincidunt quam. Maecenas congue dui id nulla ultricies, in pellentesque leo viverra. Cras tristique odio accumsan augue cursus, id pretium est efficitur. Praesent non leo et dolor congue malesuada. Nulla fringilla fermentum lorem, malesuada laoreet mi facilisis sed. Curabitur eget turpis vel tortor vestibulum pharetra. Praesent pulvinar euismod lacus, a ultricies purus laoreet id. Nulla eros metus, pharetra vel vehicula sit amet, fermentum sed orci.

                                Integer finibus nisi risus, iaculis feugiat urna pulvinar eu. Nam diam tortor, dapibus ut nunc vel, feugiat semper justo. Pellentesque vehicula porta justo, vel porttitor sapien accumsan at. Proin ac lectus sit amet velit laoreet egestas non id diam. Fusce eget massa porttitor, pharetra mauris vitae, varius arcu. Mauris tempor turpis sapien, eget consectetur augue efficitur eu. Maecenas id sem id erat luctus pellentesque et id orci. Suspendisse sit amet dolor vulputate, viverra nibh ac, blandit nisl. Donec imperdiet urna eu eros auctor, eget varius justo pellentesque. Donec ornare ex ac laoreet elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce aliquet metus sed cursus fringilla. Nam euismod lorem sed convallis aliquam. Mauris porttitor interdum posuere.

                                Morbi ut ex eu enim accumsan sodales. Curabitur ultricies, nibh eget viverra feugiat, nisl justo elementum diam, mattis sagittis erat ex id nulla. Vestibulum quis ligula tempor erat tincidunt varius quis facilisis elit. In feugiat magna et justo placerat laoreet. Fusce nec turpis vitae lectus scelerisque tristique. Maecenas luctus tortor finibus urna laoreet mollis. In lobortis, dui quis feugiat aliquet, ex orci sollicitudin lorem, sit amet efficitur tortor metus a nibh. Mauris leo elit, varius vitae ultrices faucibus, varius sit amet magna. Donec sit amet est eu erat fermentum dapibus eu pretium justo. Donec posuere maximus dui. Aliquam pulvinar eleifend pulvinar. Duis consequat est justo, et feugiat nunc tristique eget. Quisque commodo ultricies arcu ut sagittis. Proin magna dui, rutrum non pretium et, faucibus sit amet nibh. In ultricies lacus lectus."
                              readOnly={true}>
                    </textarea>
                    <h4 style={{color: "#1ebbd0"}} > Page 3/3 </h4>
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button" onClick={goToNextPage}> Finish course </button>
                    </div>


                </header>
            </div>
        </div>
    );

}