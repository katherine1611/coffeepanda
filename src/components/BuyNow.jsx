import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'

const BuyNow = () => {
    return (
        <div className="w-full flex justify-center">
            <button className="bg-black 
            text-white 
            py-2 md:py-3 
            capitalize 
            hover:bg-slate-800
            hover:text-white  
            duration-300 
            transition 
            ease-in 
            text-[11px]
            md:text-[13px]
            w-full
            text-center
            ">
                buy now
            </button>
        </div>
    )
}

export default BuyNow
