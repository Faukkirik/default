import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from "./accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordion,
}
const callBack = action("accordion mode changed")
const callBack1 = action("mode changed")
export function Afdsfs () {
    return <Accordion titleValue={"Menu"} collapsed={true} onClick={callBack} items={[]} onClicks={callBack1}/>}
export function Asdfdfgre () {
    return <Accordion titleValue={"Menu"} collapsed={false} onClick={callBack} items={[{title:"Dimych", value: 1}, {title:"lil scrip", value: 2}, {title:"rock'n'roll", value: 3}]} onClicks={callBack1}/>}
export const Accordions = ()=> {
    const [value, setValue]=useState<boolean>(false)
    return <Accordion titleValue={"Menu"} onClick={setValue} collapsed={value} items={[{title:"Dimych", value: 1}, {title:"lil scrip", value: 2}, {title:"rock'n'roll", value: 3}]} onClicks={callBack1}/>
}
