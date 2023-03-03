import React, {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu , AiOutlineShoppingCart, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Test() {

    const [nav, setNav] = useState(false)

    {/* opens and closes the mobile nav menu*/}
    function handleNav() {
        setNav(!nav)
    }

    {/* This closes the mobile nav if it is still open once the screen width is larger than 768px */}
    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)")
        function myFunction(e) {
          setNav(false);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
      }, []);


    return (
        <nav className="flex items-center justify-between px-6 py-4 text-gray-100 bg-black">
            <Link to="/">
                <img src="/logo.png" className="w-auto h-20"/>
            </Link>

            {/* desktop nav menu */}
            <ul className="hidden md:flex md:gap-x-4">
                <li className="pr-4 cursor-pointer hover:underline hover:underline-offset-8">
                   <a>About</a> 
                </li>
                <li className="pr-4 cursor-pointer hover:underline hover:underline-offset-8">
                   <a>Shop</a>
                </li>
                <li className="pr-4 cursor-pointer hover:underline hover:underline-offset-8">
                   <a>Blog</a>
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-8">
                   <a>Contact</a> 
                </li>
            </ul>


            {/* render open or close menu based on the state of nav  */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className="hidden md:flex md:gap-x-4">
                <CgProfile size={30} />
                <AiOutlineShoppingCart size={30} />
            </div>

            {/* Mobile nav menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-72 bg-neutral-900 h-full ease-in-out duration-1000 border-r border-r-neutral-700 z-40' : 'bg-neutral-900 ease-in-out duration-1000 fixed left-[-100%] top-0 h-full w-72 z-40'}>
                <li>
                <img src="../src/Images/logo.png" className="w-auto h-20 m-4"/>
                </li>
                <li className="py-4 mx-6 text-gray-200 border-b cursor-pointer border-b-neutral-600 hover:text-gray-400">
                   <a>About</a> 
                </li>
                <li className="py-4 mx-6 text-gray-200 border-b cursor-pointer border-b-neutral-600 hover:text-gray-400">
                   <a>Shop</a>
                </li>
                <li className="py-4 mx-6 text-gray-200 border-b cursor-pointer border-b-neutral-600 hover:text-gray-400">
                   <a>Cart</a>
                </li>
                <li className="py-4 mx-6 text-gray-200 border-b cursor-pointer border-b-neutral-600 hover:text-gray-400">
                   <a>Contact</a> 
                </li>
                <li className="py-4 mx-6 text-gray-200 border-b cursor-pointer border-b-neutral-600 hover:text-gray-400">
                   <a>Profile</a> 
                </li>
                <li>
                    <div className="flex items-center mx-6 mt-10 text-gray-100 gap-x-4">
                        <AiOutlineInstagram size={30} className="cursor-pointer hover:text-stone-400"/>
                        <BsFacebook size={25} className="cursor-pointer hover:text-stone-400"/>
                        <AiFillYoutube size={30} className="cursor-pointer hover:text-stone-400"/>
                        <AiOutlineTwitter size={30} className="cursor-pointer hover:text-stone-400"/>
                        <FaTiktok size={25} className="cursor-pointer hover:text-stone-400"/>
                    </div>
                </li>
            </ul>
        </nav>
    )
}