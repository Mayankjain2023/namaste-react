

//custom hook to determine whether the user internet is working or not

import { useEffect,useState } from "react"


const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStatus] = useState(true);
    //check if the user is online

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })
    },[]);

    return onlineStatus;
}


export default useOnlineStatus;