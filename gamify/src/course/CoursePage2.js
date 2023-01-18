import React, {useState} from "react";
import {useNavigate} from "react-router";
import './CoursePage.css';
import NavbarCustom from "../sidebarAndNavbar/NavbarCustom";
import SidebarSimpleMainPage from "../sidebarAndNavbar/SidebarSimpleMainPage";

export default function CoursePage2() {

    let navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/coursePage3');
    }

    const goBack = () => {
        navigate('/coursePage1');
    }

    return (
        <div>
            <NavbarCustom/>
            <SidebarSimpleMainPage/>
            <div className="App" style={{fontFamily: "poppins"}}>
                <header className="myHeader">
                    <h1 style={{color: "#1ebbd0"}}> Course on {localStorage.getItem("courseSubject")} > {localStorage.getItem("courseCategory")}</h1>

                    <textarea className="lorem-text"  rows="30" cols="100"
                              value="Vestibulum pretium mauris eget leo rhoncus, et bibendum augue lacinia. In dignissim ligula porta tristique pellentesque. Fusce aliquam enim non lectus commodo dapibus. Curabitur semper lorem eros, porttitor sollicitudin erat gravida quis. Phasellus tempus dui ac nulla volutpat, at facilisis tortor viverra. Integer efficitur nisl non leo ultrices, ut ullamcorper arcu iaculis. Sed mi metus, feugiat a consectetur in, condimentum sit amet dolor. Proin ut lacus auctor, aliquam augue id, maximus lacus. Maecenas quis nisl varius ante faucibus condimentum. Sed tincidunt vitae dui vitae euismod.

                              Nulla pellentesque neque eget aliquet rhoncus. Praesent in ipsum sapien. Donec eget sapien leo. Ut mollis purus elementum enim imperdiet condimentum. Aliquam tincidunt euismod erat, non aliquet ligula lacinia sed. Donec viverra ultricies dolor, sit amet mattis dolor tincidunt quis. In eget ligula eu urna bibendum tincidunt. In placerat, eros id porttitor placerat, elit urna mollis quam, in dictum eros mi ut libero. Maecenas lobortis velit ac magna mattis pretium.

                              Sed eget erat pulvinar, pharetra enim ut, mattis quam. Suspendisse ac dignissim felis. Fusce a sollicitudin erat. Sed eu dapibus turpis. Nam et nisl vel massa placerat laoreet eu sed odio. Aliquam erat magna, semper id mollis in, hendrerit mattis ipsum. Donec tincidunt nisl tempor rutrum interdum. Nullam quis justo a mauris faucibus vulputate et quis risus. Curabitur egestas sodales posuere. Sed at ante sit amet leo tristique maximus. Vivamus ac porttitor ex. Aliquam aliquam varius ex, fermentum gravida ante commodo quis.

                              Curabitur egestas diam a est maximus interdum. Cras at sollicitudin dui, dictum aliquet tellus. Sed euismod malesuada ante eget feugiat. Suspendisse nec sem nec felis auctor viverra vitae nec nisi. Mauris interdum dui id sem volutpat molestie. Duis gravida dui quis purus luctus, sit amet semper felis aliquam. Nullam porttitor interdum placerat. Duis posuere lectus sed nunc tincidunt laoreet. Nunc quis urna consequat, vestibulum lectus vulputate, venenatis sem.

                              In vel ex convallis, laoreet tellus sit amet, maximus tortor. Phasellus sit amet risus dolor. Donec molestie luctus consectetur. Vivamus rutrum nunc in eros pretium ullamcorper. Donec sit amet risus a ex varius malesuada ac vel elit. Nunc lacinia ex a nibh mollis accumsan. Nunc viverra auctor enim vel sodales. Praesent elit mi, accumsan non sapien ut, tincidunt mattis nisl. Fusce aliquet, tellus sit amet condimentum suscipit, tellus metus tempor lectus, nec pellentesque ex orci et risus. Cras non purus non orci lacinia placerat ac id est..
                              Cras ultricies finibus aliquet. Etiam interdum elit nec elit luctus hendrerit. Donec condimentum non sapien nec feugiat. Curabitur lobortis auctor ex quis tempor. Ut at congue erat. Donec porttitor eros non elit scelerisque gravida eget sed ex. Vestibulum volutpat, ante at aliquam porttitor, diam sem bibendum purus, id consequat sem sem vel ligula. Donec imperdiet sapien non fringilla consectetur. Donec non libero in mauris dictum tempor."
                              readOnly={true}>
                    </textarea>
                    <h4 style={{color: "#1ebbd0"}} > Page 2/3 </h4>
                    <div>
                        <button className="go-back-button" onClick={goBack}> Go back</button>
                        <button className="next-button" onClick={goToNextPage}> Next page </button>
                    </div>


                </header>
            </div>
        </div>
    );

}