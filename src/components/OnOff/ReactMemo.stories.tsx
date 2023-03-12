import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const MessagesCounter = (props: { count: number }) => {
    console.log("Count")
    return <div>{props.count}</div>
}
//
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("User")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret);
const NewMessagesCounter = React.memo(MessagesCounter);

export const Example1 = () => {
    const [counter, setCounter]=useState(0)
    const [users, setUsers]=useState(["Dimych", "Valera", "Artem"])
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setUsers([...users, "newUsers"+new Date().getTime()])}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}