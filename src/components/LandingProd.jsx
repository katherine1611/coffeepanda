import React from 'react'
import BestSeller from './BestSeller'
import { BiMouse } from 'react-icons/bi'
import image1 from '../assets/img/bs-1.png'
import image1Flavor from '../assets/img/bs-1-flavor.png'
import image2 from '../assets/img/bs-2.png'
import image2Flavor from '../assets/img/bs-2-flavor.png'

const LandingProd = () => {
    return (
        <div className="w-full lg:w-[60%] mt-28 md:mt-30 xs:bg-red-100">
            <div className="container mx-auto">
                <header className="flex justify-center lg:justify-start">
                    <div className="content">
                    <p className="text-center text-[14px] lg:text-left font-normal">
                        #HappinessStartsHere
                    </p>
                    <h1 className="text-4xl text-center md:text-left md:text-4xl lg:text-4xl xl:text-6xl font-bold capitalize tracking-tight">
                        coffee panda
                    </h1>
                    <p className="text-center lg:text-left text-[14px]">Give yourself a break.</p>
                    </div>
                </header>
                <div className="mt-14 w-full">
                <small className="font-medium flex justify-center lg:justify-start mb-5 lg:mb-3">BestSellers!</small>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 items-center justify-center lg:justify-start">
                        <BestSeller img={image1} flavor={image1Flavor} name="Brew Iced Coffee" flavors="Caramel, Chocolate"/>
                        <BestSeller img={image2} flavor={image2Flavor} name="Vanilla Ice on top" flavors="Dark Chocolate, Vanilla"/>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default LandingProd
