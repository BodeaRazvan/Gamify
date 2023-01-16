import React from "react";

export default function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" style={{border: "5px solid black", borderRadius: 20}}>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}