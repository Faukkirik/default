import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from "./accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordion,
}
const callBack = action("accordion mode changed")
export function Afdsfs () {
    return <Accordion titleValue={"Menu"} collapsed={true} onClick={callBack}/>}
export function Asdfdfgre () {
    return <Accordion titleValue={"Menu"} collapsed={false} onClick={callBack}/>}
export const Accordions = ()=> {
    const [value, setValue]=useState<boolean>(false)
    return <Accordion titleValue={"Menu"} onClick={setValue} collapsed={value}/>
}
