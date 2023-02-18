import React, {useState} from 'react';

type PropsType = {
    on: boolean

    onClick: (on: boolean)=>void
}


export const ControlledOnOff = (props: PropsType) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white",
        cursor: "pointer"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.on ? "white" : "red",
        cursor: "pointer"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
        cursor: "wait"
    }


    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onClick(true)}}>On
            </div>
            <div style={offStyle} onClick={()=>{props.onClick(false)}}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};