import { IMAGE_URL } from "../utils/constants";


const RestoCard = (props)=>{
    const {resData } = props;
    console.log(resData);
    const {name,cuisines,avgRating,costForTwo,} = resData

    return (
        <div className="m-4 p-4 flex card">
            <img className="res-logo" src= {IMAGE_URL + resData.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>Rating : {avgRating} </h4>
            <span>
              {/* Cost: {costForTwo} */}
            </span>
        </div>
    )
}


export default RestoCard;