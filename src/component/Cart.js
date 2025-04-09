import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearAllListeners } from '@reduxjs/toolkit';
import { clearCart } from '../utils/cartSlice';

function Cart() {

    const dispatch= useDispatch()

    
    const handleClear=()=>{
        dispatch(clearCart())
    }

    const CartItems= useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-5 p-5 '>
        <h1 className='font-bold'>Cart</h1>
        <button className='p-2 m-2 text-white bg-black rounded-lg' onClick={handleClear}>Clear Cart</button>
        <div className='w-6/12 m-auto border'>
        {CartItems.length===0  && <h1>Cart is Empty Add Items to cart</h1>}
        <ItemList items={CartItems}/>
        </div>
        
    </div>
  )
}

export default Cart;