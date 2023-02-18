import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ControlledOnOff } from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: ControlledOnOff,
}
const callBack = action("accordion mode changed")
export function OnMode () {return <ControlledOnOff on={true} onClick={callBack}/>}
export function OffMode() {return <ControlledOnOff on={false} onClick={callBack}/>}

export const OnOffers = ()=> {
    const [OnOff, setOnOff]=useState<boolean>(false)
    return <ControlledOnOff on={OnOff} onClick={setOnOff}/>
}
