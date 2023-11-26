import React from "react";
import  ReactDOM  from "react-dom/client";

//React.creteElement basically creates an object =>object and when we render this to DOM it => HTML element
//ReactDOM is used for displaying on the browser
//ReactDOM takes the object returned by react.createElement and converts it into HTML element to render it on browser


//JSX -> HTML or XML like syntax ( its not html inside javascript)
//JSX is isolated ( its not part of react)
//JSX is not proper js so JS engines cannot comprehend them -> here parcel is doing the job
//JSX (transpiled before it reaches the js engine)-parcel-babel's job
//In JSX to give class you need to give className to it
//JSX written in one line is fine syntax but to write it in multiple lines -> it must be wrapped in () brackets

// const heading = React.createElement('h1',{id:'heading'},"Namaste react");


//jsx
//React element
// const heading = (<h1  className="head" tabIndex='5' >
//     Namaste React via JSX
//     </h1> )
// console.log("JSX",jsxElement);


//class component - old
//functional component - new

//React function component - normal js function with first cap letter ( returns react element ( jsx))


//React functional component
const Title = ()=>(
    <div id = "title">
        <h3>This is the title</h3>
    </div>
)


const Message = ()=> (
    <p>This is the test message.</p>
)

// component composition
const HeadingComponent = ()=>(

    (
    <div id="container"> 
        <Title/>
        <h1 className="heading">Functional heading component</h1>
        <Message/>
    </div>
    )
)


console.log(<HeadingComponent/>);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<HeadingComponent/>);