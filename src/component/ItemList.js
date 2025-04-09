import React from 'react'
import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice'
//import { useDispatch } from 'react-redux'

function ItemList({items}) {

  const dispatch=useDispatch();
  //const dispatch= useDispatch()
  const handleAdditems=(items)=>{
    dispatch(addItems(items));
    console.log("dispatch")
  }
    
  return (
    <div>
      {items.map((itemslist)=> <div key={itemslist.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between '>
     
       <div className='w-9/12'>
        <span className='font-bold '>{itemslist.card.info.name} </span> 
        <span>- RS.{itemslist.card.info.defaultPrice ? itemslist.card.info.defaultPrice/100: itemslist.card.info.price/100} </span>
        <p className='text-sm'> {itemslist.card.info.description}</p>
         
       
       </div>
       <div className='w-3/12 p-4 '>
       <div className='absolute'>
       <button className='p-1 bg-black text-white shadow-lg rounded mx-5 ' 
       onClick={()=>handleAdditems(itemslist)}>Add +</button>
       </div>
       <img className=" rounded-lg w-full " src={CDN_URL+itemslist.card.info.imageId} alt="" />
      
       </div>
       </div>
         )
         }
         </div>
  )
}

export default ItemList