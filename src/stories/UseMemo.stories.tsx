import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export function DifficultCountingExample() {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultA = 1
    let resultB = 1
    resultA = useMemo<number>(() => {
        let tempResultA=1
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => (setA(Number(e.currentTarget.value)))}/>
        <input value={b} onChange={(e) => (setB(+e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("User")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter]=useState(0)
    const [users, setUsers]=useState(["Dimych", "Valera", "Artem"])
    const newArray = useMemo(()=>{return users.filter(el=>el.toLowerCase().indexOf("a") > -1)},[users])
    const addUser = () =>{
        const newUsers = [...users, 'Sveta '+ new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>add</button>
        {counter}

        <Users users={newArray}/>
    </>
}