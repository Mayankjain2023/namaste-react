
const RestoCard = (props)=>{
    const {resData } = props;
    console.log(resData);
    const {name,cuisine,rating,phone} = resData

    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>Rate : {rating} </h4>
            <span>
                Phone : {phone}
            </span>
        </div>
    )
}


export default RestoCard;