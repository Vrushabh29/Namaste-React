import React, { useState } from 'react'
import ItemList from './ItemList'



function RestoCategory({data,showItems,setShowIndex}) {
    
    // const [showItems, setShowITems]=useState(false)
    const handleClick=()=>{
      setShowIndex();
    }
    console.log(data)
    console.log(showItems)
  return (
    <div className='bg-gray-100  shadow-lg p-4 w-6/12 mx-auto my-4 '>
    <div className='flex justify-between cursor-pointer' onClick={handleClick} >
      <span className='font-bold text-lg'> {data.title} ({data.itemCards.length})</span>
      <span> </span>
      </div>
      { showItems && <ItemList items={data.itemCards}/>}
    </div>
  )
}

export default RestoCategory
