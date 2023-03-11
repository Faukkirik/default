import {reducer, StateType} from "./reducer"


test("reducer should change value on true", () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED" })
    expect(newState.collapsed).toBe(true)
})
test("reducer should change value on false", () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED" })
    expect(newState.collapsed).toBe(false)
})
test("reducer should be error", () => {
    const state: StateType = {
        collapsed: true
    }
    expect(()=>{reducer(state, {type: "ERROR" })}).toThrowError();
})