import React, {ChangeEvent, useRef, useState} from "react";
import { action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export  function  UncontrolledInput () {return <input />}
export  function  TrackValueOfUncontrolledInput () {
    const [value, setValue]=useState("")
    const callBack=(event: ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }
    return <>
    <input onChange={callBack} value={value}/> ---{value}
    </>
}
export  function  GetValueOfControlledInputByButtonPress () {
    const [value, setValue]=useState("")
    const inputRef=useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/><button onClick={save}>save</button> ---actual value: {value}
    </>
}
export  function  ControlledInput () {return <input value={'it-incubator.by'}/>}