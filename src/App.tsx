import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/accordion/uncontrolledaccordion";
import {UnControlledRating} from "./components/rating/UnControlledRating";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

function App() {
    const [ratingValue, setRatingValue]=useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(true)
    const [onOff, setOnOff]=useState<boolean>(false)
    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} onClicks={()=>{console.log("App rendering")}} items={[{title:"Dimych", value: 1}, {title:"lil scrip", value: 2}, {title:"rock'n'roll", value: 3}]}/>
            {/*Article 2
            <Rating value={4}/>
            Score...*/}
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <div><ControlledOnOff on={onOff} onClick={setOnOff}/></div>
        {/*<UnControlledAccordion titleValue={"--Menu--"}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
