//functional component -> Function that returns a piece of JSX
//Class based component => Class based components extends React.component and has render method that renders the piece of JSx

import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            count:0
        }
        console.log("pr",props);
    }

    render(){
        return (
            <div className="user-card">
                <h2>This is a user card</h2>
               
                <p>Count : {this.state.count}</p>
                <button onClick={()=>{
                    // this.state.count+=1 do not update state variable directly by equating the value

                    this.setState({
                        count: this.state.count + 1
                    })
                }
                    } >+</button>
                <ul>
                        <li>Name: {this.props.name}</li>
                        <li>Location: {this.props.location}</li>
                </ul>

            </div>
        )
    }
}

export default UserClass;