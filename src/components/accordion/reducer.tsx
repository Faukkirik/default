import React from "react";
export type StateType = {
    collapsed: boolean
}
type ActionType = {
    type: string
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    console.log(1)
    switch (action.type){
        case "TOGGLE-COLLAPSED":
            console.log(7)
            return {...state, collapsed: !state.collapsed}
        default : throw new Error("Sorry, but I dont search this action type")
    }
}