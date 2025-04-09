import React, { useState } from 'react'

//import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constant';

import { useParams } from 'react-router';
import useRestomenu from "../utils/useRestomenu";
import RestoCategory from './RestoCategory';

//import {MENU_URL} from "../utils/constant";


const RestoMenu = () => {
   // const [restInfo, SetRestInfo]= useState(null);

    const {resId}= useParams();
    console.log(resId);

const restInfo= useRestomenu(resId);
const [showIndex,setShowIndex]=useState(null);
// useEffect(()=>{ fetchdata();},[])
// const fetchdata= async ()=>{

//     const data=  await fetch(MENU_URL+resId);
//     const json = await data.json();
//     console.log(json.data);

//     SetRestInfo(json.data);
   
// }

if(restInfo===null) return <Shimmer/>
const {name,cuisines,costForTwoMessage,cloudinaryImageId}= restInfo.cards[2]?.card?.card?.info;
const {itemCards}=restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card; 


//data.cards[4] .groupedCard.cardGroupMap.REGULAR.cards[1] .card.card.itemCards[4] 
console.log(restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
const Category= restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(Category)
  return (
    
      <div className='text-center '>
         {/* <img className="rounded-lg w-[120px]" src={CDN_URL+ cloudinaryImageId} alt="" /> */}
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        
        <p className='font-bold  text-lg' >{cuisines} {costForTwoMessage}</p>
    {Category.map((categries, index)=> <RestoCategory 
    data={categries?.card?.card}
    showItems={index == showIndex ? true:false}
    setShowIndex={()=>setShowIndex(index)}
     />)}
    
        <h2></h2>
        </div>
       
      
  
  )
}

export default RestoMenu
