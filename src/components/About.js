import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

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
                            {/* <User name={'Mayank'} location={'Delhi'} /> */}
                            <UserClass name = {'Mayank'} location = {'Delhi'}/>
                </div>
            </div>
        )
    }

}


export default About;