import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff, PropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff stories',
    component: OnOff,
}
const callBack = action("accordion mode changed")

export const UncontrolledOn = (props: PropsType)=> {
    return <OnOff onChange={callBack} defaultOn={true}/>
}
export const UncontrolledOff = ()=> {
    return <OnOff onChange={callBack} defaultOn={false}/>
}
