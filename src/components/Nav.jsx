import React, {useState} from 'react'
import Logo from '../assets/img/panda.png'
import { HiOutlineHome } from "react-icons/hi"
import { BiStore,BiSearchAlt } from "react-icons/bi"
import { GiShoppingCart } from "react-icons/gi"
import { IoFastFoodOutline,IoCloseCircleOutline } from "react-icons/io5"
import { CgMenu } from "react-icons/cg"
const Nav = () => {
    
    let [nav, openNav] = useState(false)

    function clickHandler(){
        openNav(!nav)
    }
    return (
        <div>
            <header className={`fixed top-0 left-0 w-full z-100 ${!nav ? 'shadow-md' : 'shadow-none'}`}>
                <div className='container mx-auto bg-white relative'>
                    <nav className="md:flex md:justify-between md:items-center py-2">
                        <div className="w-12 h-12 shrink-0 block">
                            <img src={Logo} alt="" className="max-w-full max-h-full"/>
                        </div>
                        <ul className={`mt-7 lg:mt-0 
                                        lg:mb-0 
                                       lg:space-x-2 
                                       space-y-2 
                                       lg:space-y-0 
                                       capitalize 
                                       flex 
                                       flex-col 
                                       lg:flex-row
                                       absolute
                                       lg:static
                                       lg:z-auto  
                                       z-[-1]
                                       left-0
                                       w-full
                                       lg:w-auto
                                       shadow-md 
                                       lg:shadow-none
                                       transition-all 
                                       duration-700 
                                       ease-in
                                       bg-white
                                       ${nav ? 'top-10 opacity-100' : 'top-[-490px] lg:opacity-100 opacity-0'}
                                        bg-black text-white 
                                        lg:bg-white lg:text-black
                                       `}>
                            <hr className="lg:hidden w-full"/>
                            <li className="flex px-4 py-3 md:py-2 hover:border-l-4 hover:border-white md-hover:bg-black cursor-pointer duration-200 space-x-2">
                                <HiOutlineHome />
                                <span className="font-normal text-xs">home</span>
                            </li>
                            <li className="flex px-4 py-3 md:py-2 hover:border-l-4 hover:border-white md-hover:bg-black cursor-pointer duration-200 space-x-2">
                                <IoFastFoodOutline />
                                <span className="font-normal text-xs">products</span>
                            </li>
                            <li className="flex px-4 py-3 md:py-2 hover:border-l-4 hover:border-white md-hover:bg-black cursor-pointer duration-200 space-x-2">
                                <BiStore />
                                <span className="font-normal text-xs">store</span>
                            </li>
                            <li className="flex px-4 py-3 md:py-2 hover:border-l-4 hover:border-white md-hover:bg-black cursor-pointer duration-200 space-x-2">
                                <GiShoppingCart />
                                <span className="font-normal text-xs">cart</span>
                            </li>
                            <li>
                                <div className="flex space-x-1 mb-10 lg:mb-0 ml-4">
                                    {/* <input className="flex px-6 py-3 md:py-2 border border-black rounded hover:bg-active cursor-pointer duration-300">
                                        <span className="font-normal text-xs">Sign Up</span> */}
                                    <div className="relative flex lg:flex-1">
                                        <input type="text" placeholder="Search . . ."
                                        className="
                                        text-xs 
                                        border 
                                        pl-5
                                        pr-10 
                                        outline-none
                                        focus:border-black duration-300
                                        peer
                                        "
                                        />
                                        <BiSearchAlt className="absolute right-3 top-2 text-xl text-slate-400 peer-focus:text-black"/>
                                    </div>
                                    <button className="flex px-6 py-3 md:py-2 border border-white text-white bg-black md:border-black hover:bg-active hover:text-black hover:border-transparent hover:shadow cursor-pointer duration-300">
                                        <span className="font-normal text-xs">Login</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <button onClick={clickHandler} className="lg:hidden text-2xl cursor-pointer hover:text-slate-400 duration-300 absolute right-4 md:right-0 top-5">
                            {nav ? <IoCloseCircleOutline className="pointer-events-none"/> : <CgMenu className="pointer-events-none"/> }
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Nav
