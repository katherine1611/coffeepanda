import React from 'react'

const Dessert = (props) => {
    return (
        <div>
            <div className="my-3 flex flex-1 md:justify-center">
                <div className="cursor-pointer duration-300 border border-transparent border-t-0 border-l-0 border-r-0 hover:border-b hover:border-black">
                    <img src={props.product.src} alt="" className="w-28 h-28 md:w-24 md:h-24 object-contain mx-auto md:mx-0"/>
                    <div className="mt-3">
                        <p className="font-bold capitalize text-[13px] text-left">{props.product.name}</p>
                        <p className="font-normal text-sm text-slate-600 text-[11px] text-left leading-4">Flavors : {props.product.flavors}.</p>
                        <h1 className="text-1xl font-bold text-left">{props.product.prize}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dessert
