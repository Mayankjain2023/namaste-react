//functional component -> Function that returns a piece of JSX
//Class based component => Class based components extends React.component and has render method that renders the piece of JSx

import React from "react"



//when a class component is called /instantiated then first its constructor is called

class UserClass extends React.Component{



    constructor(props){
        super(props)


        this.state = {
            count:0
        }
        console.log("child Constructor")
        console.log("pr",props);
    }

    //Imp method provided by the react component class
    //once the component (constructor as well as render are called ) is mounted on the DOM after that this method is called
    componentDidMount(){
            console.log("child Component mount");
            

            //MAKE an api call over here and then fill the data in the component
    }

    render(){
        console.log("Rendering child  component")
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