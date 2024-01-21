//functional component -> Function that returns a piece of JSX
//Class based component => Class based components extends React.component and has render method that renders the piece of JSx

import React from "react"



//when a class component is called /instantiated then first its constructor is called

class UserClass extends React.Component{



    constructor(props){
        super(props)
        this.state = {
            userInfo : {
                name:"Mayank",
                location: "INDIA"
            } 
        }
        console.log("child Constructor")
    }

    //Imp method provided by the react component class
    //once the component (constructor as well as render are called ) is mounted on the DOM after that this method is called
    async componentDidMount(){
            console.log("child Component mount");
            //MAKE an api call over here and then fill the data in the component
            const user = await fetch('https://api.github.com/users/Mayankjain2023');
            const data = await user.json()
            console.log("data user",data);

                this.setState({
                    userInfo:data
                });
            
           

    }

    componentDidUpdate (){
        console.log("Child component component did update")
    }

    componentWillUnmount(){
        //after the component is removed/unmounted from the dom
        console.log("child component will unmount")
    }

    render(){
        console.log("Rendering child  component")

        const {name,location,avatar_url } = this.state.userInfo;
    
        return (
            <div className="user-card">
                <h2>This is a user card</h2>
                <ul>    <span>
                            <img className="user-img" src={avatar_url}/>
                        </span>
                        <li>Name: {name}</li>
                        <li>Location: {location}</li>
                </ul>

            </div>
        )
    }
}

export default UserClass;



/**
 * ---- MOUNTING CYCLE ---- 
 * 
    * Parent constructor
    * parent render 
    *      -> child constructor
    *      -> child render
    *      -> component didmount{
    *          ->API CALL
    *          ->this.setState() -> which updates the value in the DOM -> render() again
    *          }
 * ----- MOUNTING CYCLE Completes ---- 
 *          
 * After this componentDidUpdate() 
 * When component is unmounted fromt the DOM then componentWillUnmount() is called 
 * 
 * ALL this used to be done with Class components -> 
 * BUT with functional components we have useEffect , useState() etc to do the sane in the lesser lines of code
 * 
 * 
 * 
 * ComponentDidMount is not equivalent to useEffect () -> 
 * useEffect does not use componentdid mount behind ht scenes
 * 
 * 
 * 
 * after using componentDidMount it is necessary to use componentWillUnmount() to unload it otherwise there will be multiple instances of the component running Behind the scene
 */


/**
 * In case of useEffect(()=>{
 * 
 * },[])
 * 
 * 
 * 
 * it takes empty dependency array ,
 * it makes api call only once during the initial render, i.e when the component loads for the first time
 * 
 * BUT if we use setInterval inside useEffect () we will find that while we move to the other components it is still executing so 
 * we need to clean it up just line component did mount 
 * we do this by returning from useEffect()
 * 
 * useEffect(()=>{
    *  setInterval(()=>{
    * },1000)
 * 
 * return ()=>{
 *  console.log("Useffecy return")
 * }
 * },[])
 * 
 */