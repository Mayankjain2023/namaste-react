

{/* 
<div id="parent">
    <div id="child">
        <h1>bla bla!</h1>
        <h2>bla bla 2!</h2>
    </div>
     <div id="child2">      // to have multple nested childrens? => { pass array of elements as props}
        <h1>bla bla!</h1>
        <h2>bla bla 2!</h2>
    </div>
</div>

*/


}


const parent = React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
   [ React.createElement("h1",{},'I am an h1 tag!'), React.createElement('h2',{},'i am an h2 tag') ]
),
    React.createElement("div",{id:"child2"},
    [ React.createElement("h1",{},'I am an h1 tag!'), React.createElement('h2',{},'i am an h2 tag') ]
    )]
)
// when required multiple child elements pass element as an array


//this way it looks messy -> thts'y we have JSX
// JSX makes our life esy when we have to create elements using JAVASCRIPT 

console.log("Parent",parent);

const heading = React.createElement('h1',{
    id:"heading",xyz:"abc"
},'Hello from react');


console.log(heading);
//object
//createElement here returns the object

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(parent); 
//render method converts the heading object to the element