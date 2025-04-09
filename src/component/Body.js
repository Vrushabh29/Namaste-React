
import restList from '../utils/mockdata'
import RestoCard,{WithpromLable} from './RestoCard'
import { useEffect, useState,UserContext, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/userContext'

let restoreList1 =[
    {
        info: {
        id: "13906",
        name: "Wadeshwar",
        cloudinaryImageId: "ee51fzavw0jgsryxkavp",
        locality: "Kalyani Nagar",
        areaName: "Kalyani Nagar",
        costForTwo: "₹350 for two",
        cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Street Food",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4.8,
        parentId: "1770",
        avgRatingString: "4.4",
        totalRatingsString: "49K+",
        sla: {
        deliveryTime: 33,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
        }  
    }
},
{
    info: {
    id: "13907",
    name: "KFC",
    cloudinaryImageId: "ee51fzavw0jgsryxkavp",
    locality: "Kalyani Nagar",
    areaName: "Kalyani Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "South Indian",
    "North Indian",
    "Chinese",
    "Street Food",
    "Desserts",
    "Beverages"
    ],
    avgRating: 3.4,
    parentId: "1770",
    avgRatingString: "4.4",
    totalRatingsString: "49K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_EMPTY"
    }  
}
},
{
    info: {
    id: "13908",
    name: "KFC",
    cloudinaryImageId: "ee51fzavw0jgsryxkavp",
    locality: "Kalyani Nagar",
    areaName: "Kalyani Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "South Indian",
    "North Indian",
    "Chinese",
    "Street Food",
    "Desserts",
    "Beverages"
    ],
    avgRating: 3.2,
    parentId: "1770",
    avgRatingString: "4.4",
    totalRatingsString: "49K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_EMPTY"
    }  
}
},
{
    info: {
    id: "13909",
    name: "KFC",
    cloudinaryImageId: "ee51fzavw0jgsryxkavp",
    locality: "Kalyani Nagar",
    areaName: "Kalyani Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "South Indian",
    "North Indian",
    "Chinese",
    "Street Food",
    "Desserts",
    "Beverages"
    ],
    avgRating: 4.4,
    parentId: "1770",
    avgRatingString: "4.4",
    totalRatingsString: "49K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_EMPTY"
    }  
}
}
]
const Body =()=>{
    const {loggedInUser,SetUsername}=useContext(UserContext)

    const [restoreList, setRestoreList]=useState([])
    const [searchdata, setsearchdata]=useState("")
    const [filterrestoreList, setFilterrestoreList]=useState([])

    useEffect(()=>{fetchData()},[]);

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.579343&lng=73.9089168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        console.log(json);
     setRestoreList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilterrestoreList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    console.log(restoreList.length);
//conditinal rendering
//     if(restoreList.length === 0)
//     {
//   return <Shimmer/>
//     }
const Promoterescards= WithpromLable(RestoCard);
const onlineStatus= useOnlineStatus();
 
if(onlineStatus===false) return (<h1>  you are offline, kindly connected to internet</h1>);

    return restoreList.length === 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter flex">

                <div className="search m-4 p-4">

                    <input type="text" className="border border-solid border-black" value={searchdata}  onChange={(e)=>{setsearchdata(e.target.value)}}/>
                    <button className='px-3 py-2 m-3 bg-green-200 rounded-lg' onClick={()=>{
                        console.log(searchdata);
                        console.log(restoreList)
                        const SearchResto = restoreList.filter((res)=> res.info.name.toLowerCase().includes(searchdata.toLowerCase()));
                        console.log(SearchResto)
                   setFilterrestoreList(SearchResto) }
                    
                    }>Search</button>
                </div>
                <div className='m-4 p-4 flex items-center  '>
                <button className="px-4 py-2 m-3 bg-gray-200 rounded-lg" onClick={()=>{const filterlist=restoreList.filter((res)=>res.info.avgRating>4.5);console.log(filterlist); setFilterrestoreList(filterlist) } }
                > Top rated button</button>
                </div>

                <div className='m-4 p-4 flex items-center'> 
                    <label htmlFor=""> UserName : </label>
                    <input className='border border-black p-2' type="text" value={loggedInUser} onChange={(e)=>{SetUsername(e.target.value)}}/>
                </div>
               
            </div>
            {/* <div className="search"> search</div> */}
            <div className="flex flex-wrap ">
                    
                    {
                        filterrestoreList.map((restautent)=>  (  <Link key={restautent.info.id} to={"/restorent/"+restautent.info.id}> 
                        
                        { restautent.info.isOpen? (<Promoterescards restData={restautent} />):(<RestoCard  restData={restautent} />) }
                        
                        
                        </Link>))
                    }
                 
                    
            </div>

        </div>
    )
}
export default Body;