import React from "react";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'


export default function Footer() {
    return (
        <footer className="bg-[#283923] flex flex-col justify-center items-center gap-y-6 py-10 px-8">
                <div className="w-full flex justify-between items-center text-stone-300 cursor-pointer hover:text-gray-400">
                   <a>About</a> 
                   <RiArrowDropDownLine size={20} />
                </div>
                <div className="w-full flex justify-between items-center  text-stone-300 cursor-pointer hover:text-gray-400">
                   <a>Help Center</a>
                    <RiArrowDropDownLine size={20}/>    
                </div>
                <div className="w-full flex justify-between items-center  text-stone-300 cursor-pointer hover:text-gray-400">
                   <a>Company</a>
                    <RiArrowDropDownLine size={20}/>
                </div>
                <div className="w-full flex justify-between items-center  text-stone-300 cursor-pointer hover:text-gray-400">
                   <a>Contact</a> 
                    <RiArrowDropDownLine size={20}/>
                </div>
                <div className="w-full flex justify-between items-center text-stone-300 cursor-pointer hover:text-gray-400">
                   <a>Offers</a>
                   <RiArrowDropDownLine size={20}/> 
                </div>
                <div className="flex items-center mt-10 mx-6 gap-x-8 text-stone-300">
                    <AiOutlineInstagram size={30} className=" cursor-pointer hover:text-stone-400"/>
                    <BsFacebook size={25} className=" cursor-pointer hover:text-stone-400"/>
                    <AiFillYoutube size={30} className=" cursor-pointer hover:text-stone-400"/>
                    <AiOutlineTwitter size={30} className=" cursor-pointer hover:text-stone-400"/>
                    <FaTiktok size={25} className="cursor-pointer hover:text-stone-400"/>
                </div>
        </footer>
    )
}