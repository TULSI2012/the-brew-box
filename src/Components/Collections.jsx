import React from "react";
import { useNavigate } from "react-router-dom";

export default function Collections() {

    const navigate = useNavigate();

    return (
        // Main container that controls when the layout is vertical vs horizontal 
        <section className="flex flex-col items-center px-4 py-10 bg-gray-100 gap-y-4 md:flex-row md:justify-center md:gap-x-4">

            {/* Group 1 - Long div + 2 smaller divs*/}
            <div className="flex flex-col w-full max-w-lg gap-y-4">
                <div 
                    onClick={() => navigate("/collections/Roaster")}
                    className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group ">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                    <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                        Roasters Choice Collection
                    </p>
                </div>
                <div className="flex gap-x-4">
                    <div
                        onClick={() => navigate("/collections/Seasonal")} 
                        className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Seasonal Collection
                        </p>
                    </div>
                    <div 
                        onClick={() => navigate("/collections/Espresso")}
                        className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Espresso Collection
                        </p>
                    </div>
                </div>
            </div>

            {/* Group 2 - Long div + 2 smaller divs*/}
            <div className="flex flex-col w-full max-w-lg gap-y-4">
                <div className="flex gap-x-4">
                    <div 
                        onClick={() => navigate("/collections/Ethiopian")}
                        className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Ethiopian Collection
                        </p>
                    </div>
                    <div 
                        onClick={() => navigate("/collections/Colombian")}
                        className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Coloumbian Collection
                        </p>
                    </div>
                </div>
                <div 
                    onClick={() => navigate("/collections/Signature")}
                    className="relative w-full h-48 overflow-hidden rounded-md cursor-pointer group">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 duration-500 ease-in-out rounded-md brightness-50 hover:scale-105" />
                    <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                        Signature Collection
                    </p>
                </div>
            </div>
        </section>
    )
}
