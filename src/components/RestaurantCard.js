import { IMAGE_URL } from "../utils/constants";


const RestoCard = (props)=>{
    const {resData } = props;
    console.log(resData);
    const {name,cuisines,avgRating,costForTwo,} = resData

    return (
        <div className="m-4 p-4 w-[250px] h-[400] bg-gray-100 rounded-lg hover:bg-gray-200 overflow-hidden">
            <span></span>
            <img className="rounded-md w-full h-[200px] object-cover"  src= {IMAGE_URL + resData.cloudinaryImageId} />
            <h3 className="font-bold m-2 py-2 text-center text-lg overflow-hidden text-ellipsis whitespace-nowrap">{name}</h3>
            <h4 className="text-justify break-words text-gray-400">{cuisines.join(',')}</h4>
            <div className="flex justify-between items-center mt-auto pt-4">
                <div className="flex items-center">
                <i className="fas fa-star text-yellow-500 mr-1"></i>
                    <span className="text-blue-600">
                    {avgRating}
                    </span>
                </div>
                <span className="text-gray-600"> 
                * {costForTwo}
                </span>
            </div>
            
        </div>
    )
}



//high order funcs

//input->restrocard->>>restrocardPromoted

export const withPromotedLabel = (RestoCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="m-2 p-2 text-gray-400 bg-black rounded-lg">Promoted</label>
                <RestoCard {...props}></RestoCard>
            </div>
        )
    }
}

export default RestoCard;