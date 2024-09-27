import { useState } from "react";


const User = ({name,location})=>{

const [count,setCount] = useState(0);



    return (
        <div
         className="card">

            <h2 onClick={(e)=>{
                setCount(count+1)
                }} >This is a user card</h2>
            
            <p>These are the users</p>
            <h3>Count : {count}</h3>
            <ul>
                <li>Name : {name}</li>
                <li>Location : {location}</li>
            </ul>


         </div>
    )
}


export default User;