import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [buttonName , SetButtonName]= useState("Login");
    const {loggedInUser}= useContext(UserContext);
//subsribe store
    const cartitem=useSelector((store)=>store.cart.items)
   console.log(cartitem)
    console.log(loggedInUser)
    const onlineStatus = useOnlineStatus();
        return(          
        <div className="flex justify-between w-23 bg-pink-100 shadow-lg m-2 sm:bg-yellow-200 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}  />
            </div>
            <div className="flex items-center  ">
                <ul className="flex p-4 m-4 px-2">
                    <li className="px-4"> online Status :{onlineStatus?"✅":"🔴"}</li>
                    <li className="px-4"> <Link to="/">Home</Link> </li>
                    <li className="px-4"> <Link to="/about">About us</Link> </li>
                    <li className="px-4"><Link to="/contact"> Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
                    
                    <li className="px-4"><Link to="/cart">Cart - {cartitem.length} items</Link></li>
                    <li className="px-4"><button className="w-16 bg-red-500 rounded-lg" onClick={()=>{ buttonName=="Login"?SetButtonName("Logout"):SetButtonName("Login")}}>{buttonName}</button></li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>    );
};
export default Header;
