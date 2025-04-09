import React, { useEffect, useState } from 'react'

function useOnlineStatus() {

    const[onlineStatus,setOnlineStatus]=useState(true)
 useEffect(()=>{
    window.addEventListener("online", (event) => {
        setOnlineStatus(true);
      });
      
      window.addEventListener("offline", (event) => {
        setOnlineStatus(false);
      });
 },[]);

 return onlineStatus;
}

export default useOnlineStatus
