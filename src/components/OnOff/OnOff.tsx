import React, {useState} from 'react';

export type PropsType = {
    onChange: (on:boolean)=>void
    defaultOn?: boolean
    //on: boolean
}


export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "green" : "white",
        cursor: "pointer"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "white" : "red",
        cursor: "pointer"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
        cursor: "wait"
    }


    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On
            </div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};


