import React from 'react'
import AddToCart from './AddToCart'
import BuyNow from './BuyNow'
import { BsFillBookmarkFill } from 'react-icons/bs'

const BestSeller = ({img,flavor,name,flavors}) => {
    return (
        <div className="z-[-1]">
            <div className="shadow border border-black bg-light w-[300px] sm:w-[280px] md:w-[300px] lg:w-[260px] xl:w-[280px] px-5 lg: xl: pb-4 relative">
                <div className="w-full flex items-center justify-center mt-5 z-[-1]">
                    <img src={img} alt="" 
                    className="block w-[120px] h-[120px] md:w-[100px] md:h-[170px] object-cover"/>
                </div>
                <div className="mt-5 md:mt-8 text-left leading-6 md:leading-4">
                    <strong className="font-bold capitalize text-sm md:text-base">{name}</strong>
                    <p className="text-xs md:text-md">Flavors : {flavors}</p>
                    <h1 className="text-lg md:text-2xl font-semibold text-[13px] mt-2">$20</h1>
                </div>
                <div className="cta justify-center mt-5 -z-1 bg-red-900">
                    {/* <AddToCart /> */}
                    <BuyNow />
                </div>
                <div className="flavors absolute -right-2 top-4">
                    <img src={flavor} alt=""
                        className="w-20 h-10 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default BestSeller
