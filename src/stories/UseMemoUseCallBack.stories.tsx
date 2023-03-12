import React, {useCallback, useMemo, useState} from "react";

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
    const [books, setBooks]=useState(["React", "JS", "CSS"])


    const memoizedAddBook = useMemo(()=>{
        return () =>{
            console.log(books)
            const newBooks = [...books, 'Angular '+ new Date().getTime()];
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=>{
            console.log(books)
            const newBooks = [...books, 'Angular '+ new Date().getTime()];
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {/*<button onClick={()=>addBook()}>add</button>*/}
        {counter}

        <Book addBook={memoizedAddBook}/>
    </>
}
type BooksSecretPropsType = {
    //books: Array<string>
    addBook: ()=>void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("Books")
    return <div>
        <button onClick={()=>props.addBook()}>add</button>
        </div>
}
const Book = React.memo(BooksSecret);