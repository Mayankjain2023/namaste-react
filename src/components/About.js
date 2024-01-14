import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{


    return (
        <div >
            <div >
                <h1>About </h1>
            </div>
            <div>
                        <User name={'Mayank'} location={'Delhi'} />
                        <UserClass name = {'Mayank'} location = {'Delhi'}/>
            </div>
        </div>
    )

}


export default About;