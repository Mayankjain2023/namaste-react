import { IMAGE_URL } from "../utils/constants";


const RestoCard = (props)=>{
    const {resData } = props;
    console.log(resData);
    const {name,cuisines,avgRating,costForTwo,} = resData

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="rounded-md " src= {IMAGE_URL + resData.cloudinaryImageId} />
            <h3 className="font-bold m-2 py-2 text-center text-lg">{name}</h3>
            <h4 className="text-justify ">{cuisines.join(',')}</h4>
            <h4 className="text-blue-600">Rating : {avgRating} </h4>
            <span>
              Cost: {costForTwo}
            </span>
        </div>
    )
}


export default RestoCard;