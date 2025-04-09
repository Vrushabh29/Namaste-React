import React, { useEffect,useState } from 'react'
import {MENU_URL} from "../utils/constant";
function useRestomenu(resId) {
    const [restInfo, SetRestInfo]= useState(null);
    useEffect(()=>{ fetchdata();},[])
    const fetchdata= async ()=>{
    
        const data=  await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json.data);
    
        SetRestInfo(json.data);
       
    }
    return restInfo;
}

export default useRestomenu;
