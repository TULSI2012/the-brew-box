import React from "react";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'


export default function Footer() {
    return (
        <footer className="flex flex-col items-center px-8 py-6 bg-gray-300">
            <div className="flex flex-col justify-center w-full gap-y-4 md:flex-row md:gap-x-10 md:border-b-2 md:border-b-gray-400 md:pb-2">
                <div className="flex items-center justify-between text-gray-800 cursor-pointer hover:text-gray-500">
                   <a>About</a> 
                   <RiArrowDropDownLine size={20} className="md:hidden"/>
                </div>
                <div className="flex items-center justify-between text-gray-800 cursor-pointer hover:text-gray-500">
                   <a>Help Center</a>
                    <RiArrowDropDownLine size={20} className="md:hidden"/>    
                </div>
                <div className="flex items-center justify-between text-gray-800 cursor-pointer hover:text-gray-500">
                   <a>Company</a>
                    <RiArrowDropDownLine size={20} className="md:hidden"/>
                </div>
                <div className="flex items-center justify-between text-gray-800 cursor-pointer hover:text-gray-500">
                   <a>Contact</a> 
                    <RiArrowDropDownLine size={20} className="md:hidden"/>
                </div>
                <div className="flex items-center justify-between text-gray-800 cursor-pointer hover:text-gray-500">
                   <a>Offers</a>
                   <RiArrowDropDownLine size={20} className="md:hidden"/> 
                </div>
            </div>
                <div className="flex items-center mx-6 mt-6 text-gray-800 gap-x-8">
                    <AiOutlineInstagram size={30} className="cursor-pointer hover:text-stone-400"/>
                    <BsFacebook size={25} className="cursor-pointer hover:text-stone-400"/>
                    <AiFillYoutube size={30} className="cursor-pointer hover:text-stone-400"/>
                    <AiOutlineTwitter size={30} className="cursor-pointer hover:text-stone-400"/>
                    <FaTiktok size={25} className="cursor-pointer hover:text-stone-400"/>
                </div>
        </footer>
    )
}