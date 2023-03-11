import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {number} from "prop-types";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const WidthValue = () => {
    const [value, setValue]= useState(2)
    return (<>
    <Select
        value={value}
        items={[{title: "Dimych", value: 1}, {title: "lil scrip", value: 2}, {title: "rock'n'roll", value: 3}]}
        onChange={setValue}/>
</>)}

export const WithoutValue = () => {
    const [value, setValue]= useState(null)
    return (<>
    <Select
        value={value}
        items={[{title: "Dimych", value: 1}, {title: "lil scrip", value: 2}, {title: "rock'n'roll", value: 3}]}
        onChange={setValue}/>
</>)}
