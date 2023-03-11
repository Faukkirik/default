import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string;
    //collapsed: boolean;
}

export function UnControlledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            console.log(6)
            dispatch({type: "TOGGLE-COLLAPSED"}
            )
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

