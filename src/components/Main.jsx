import React from 'react'
import LandingProd from './LandingProd'
import Desserts from './Desserts'
import { BsMouse } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
const Main = () => {
    return (
        <div>
            <div className="container mx-auto pb-10">
                <div className="flex flex-col lg:flex-row">
                    <LandingProd />
                    <Desserts />
                </div>
            <div className="fixed bottom-5 hidden xl:block">
                <div className="flex justify-center items-center space-x-3">
                    <div className="flex flex-col items-center">
                        <BsMouse className="text-3xl"/>
                        <IoIosArrowDown className="text-2xl"/>
                    </div>
                    <span className="font-light text-xs">Scroll down for more</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main
