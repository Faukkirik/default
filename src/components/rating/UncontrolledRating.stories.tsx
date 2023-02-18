import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const callBack = action("rating changed")
export const EmptyStars = ()=> <UnControlledRating defaultValue={0} onChange={callBack}/>
export const Rating1 = ()=> <UnControlledRating defaultValue={1} onChange={callBack}/>
export const Rating2 = ()=> <UnControlledRating defaultValue={2} onChange={callBack}/>
export const Rating3 = ()=> <UnControlledRating defaultValue={3} onChange={callBack}/>
export const Rating4 = ()=> <UnControlledRating defaultValue={4} onChange={callBack}/>
export const Rating5 = ()=> <UnControlledRating defaultValue={5} onChange={callBack}/>
