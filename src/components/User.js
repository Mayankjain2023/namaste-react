import { useState ,useContext, createContext} from "react";
import UserData from "../utils/userContext";




const User = ({name,location})=>{

const [count,setCount] = useState(0);
const userInfo = useContext(UserData)


    return (
        <div
         className="card">

            <h2 onClick={(e)=>{
                setCount(count+1)
                }} >This is a user card</h2>
            
            <p>These are the users</p>
            <h3>Count : {count}</h3>
            <ul>
                <li>Name : {userInfo.firstName}</li>
                <li>Location : {location}</li>
            </ul>


         </div>
    )
}


export default User;