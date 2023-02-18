import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnControlledAccordion } from "./uncontrolledaccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
}

export const Accordions = ()=> {
    return <UnControlledAccordion titleValue={"Menu"} />
}
