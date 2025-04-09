import { CDN_URL } from "../utils/constant";

const RestoCard=(props)=>{
    const {restData}=props;

    console.log(restData);
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRatingString,sla}= restData?.info
     return(
         <div className="m-4 p-4 w-[200px] rounded-lg  bg-gray-200 hover:bg-gray-400">
             <img className=" rounded-lg" src={CDN_URL+ cloudinaryImageId} alt="" />
             <h3 className="font-bold py-2 text-lg"> {name}</h3>
             <h4 >{cuisines.join(",")}</h4>
             <h4> {costForTwo}</h4>
             <h4>{avgRatingString} Star</h4>
             <h4>{sla.slaString}</h4>
             {/* <h4>{restData.info.sla.slaString}</h4> */}
         </div>
     )
 }

 export const WithpromLable=(RestoCard)=>{
    return (props)=>{
        return(
            <div>
            <label className="absolute bg-green-300 text-white m-2 p-2 rounded-lg">Opened</label>
            <RestoCard  {...props}/></div>
        )
    }
 }
 export default RestoCard;
