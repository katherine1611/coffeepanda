import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'

const AddToCart = () => {
    return (
        <div>
            <button className="
            bg-white border 
            py-1 md:py-[9px] px-4
            text-2xl
            hover:bg-black 
            hover:text-white  
            duration-300 
            transition 
            ease-in 
            ">
                <GiShoppingCart />
            </button>
        </div>
    )
}

export default AddToCart