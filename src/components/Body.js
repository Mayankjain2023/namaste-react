import RestoCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>

                <div className="res-container">
                    {
                        //always give a key when looping and passing it to props as each prop must be uniquely represented
                        //don't use index as keys
                        resList.map((res) => (
                        <RestoCard key={res.id} resData = {res}/>
                        ))
                    }

                </div>
        </div>
    )
}


export default Body;