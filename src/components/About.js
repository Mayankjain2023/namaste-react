import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

import UserData from "../utils/userContext";
class About extends Component{
// const About = ()=>{
constructor(props){
    super(props);
    console.log("Parent constructor")
}


componentDidMount(){
    console.log("parent Component mount")
}
    render(){
        console.log("Parent render ")
        return (
            <div >
                <div >
                    <h1>About </h1>
                </div>
                
                <div>
                    
                    {/* // way to use in case of class based components since we dont have hooks here
                    consumer takes a callback to use the data in it */}
                    <UserData.Consumer> 
                        {({firstName})=>(
                            <h1>{firstName}</h1>)}
                    </UserData.Consumer>
                </div>
                <div>
                            {/* <User name={'Mayank'} location={'Delhi'} /> */}
                            <UserClass name = {'Mayank'} location = {'Delhi'}/>
                </div>
            </div>
        )
    }

}



/*
     When there are multiple child compoenents having componentDidMount in them then the way their lifecyle works changes completely 
     in order to optimize the performance

     expected execution ? =>{
        ->parent constructor
        ->parent render
            ->child constructor
            ->child render
            ->child component didmount

            ->child constructor 
            ->child render
            ->child component didmount

         ->parent component didmount

     } -> BUT THIS IS NOT THE WAY IT WORKS


     IN ORDER THE OPTIMIZE THE PERFORMANCE REACT EXECUTES 
     -> component did mount after all the child component has rendered , sequentially only after all the child components have
     rendered the their component did mount is called ,after the child component did mount has executed successfully for all childs then 
     the parents component did mount executes


     -As in react life cycle first Render() phase happens then the Commit () phase
     1) Rende() -> clubbes for all the child components 
     2) Commit() -> (Component did mount is executed in this commit)


      actual execution ? =>{
        ->parent constructor
        ->parent render
            ->child constructor
            ->child render

            ->child constructor 
            ->child render

            ->child 1 component didmount
            ->child 2 component didmount
        ->parent component didmount

     }


     Why react batches render method for all the components ?
     -> Because once the commit phase starts , react starts UPDATING the DOM , and the DOM manipulation is the most expensive operation
     so it executes in batch the render process as well as the commit methods together so that DOM updation happens once for all

*/



export default About;