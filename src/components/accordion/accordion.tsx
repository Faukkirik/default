import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: (collapsed: boolean)=>void
    items: ItemsType[]
    onClicks: (value: any)=>void
}
type ItemsType ={
    title: string,
    value: any
}
export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
        {!props.collapsed && <AccordionBody items={props.items} onClicks={props.onClicks}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: (collapsed: boolean)=>void
    collapsed: boolean

}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>
    )
}
type AccordionBodyPropsType = {
    items: ItemsType[]
    onClicks: (value: any)=>void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            { props.items.map((el,index)=>{
                return <li key={index} onClick={()=>{props.onClicks(el.value)}}>{el.title}</li>
            })}
        </ul>
    )
}

