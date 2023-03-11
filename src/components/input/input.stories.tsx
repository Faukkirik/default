import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";
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
export  function  UnControlledInput () {return <input value={'it-incubator.by'}/>}

export function ControlledInput(){
const [parentValue, setParentValue]=useState('')
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export function ControlledCheckBox(){
    const [parentValue, setParentValue]=useState(true)
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return <input checked={parentValue} onChange={onChangeHandler} type={'checkbox'}/>
}

export function ControlledSelect(){
    const [parentValue, setParentValue]=useState<string | undefined>("3")
    const onChangeHandler =(e: ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return(
        <select value={parentValue} onChange={onChangeHandler}>
        <option value={"1"}>none</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Moscow</option>
        <option value={"4"}>Kiev</option>
        </select>
    )
}