import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/accordion/uncontrolledaccordion";
import {UnControlledRating} from "./components/rating/UnControlledRating";

function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2
            <Rating value={4}/>
            Score...*/}
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <div><OnOff /></div>
        <UnControlledAccordion titleValue={"--Menu--"}/>
            <UnControlledRating />
        </div>
    );
}
type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitle rendering")
    return (<div><b>
        {props.title}
    </b>
    </div>)
}


export default App;
