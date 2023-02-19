import React from "react";

export default function Newsletter() {
    return (
        <section className="flex flex-col items-center bg-[#31452C] text-stone-300 h-full p-10">
            <h2 className="text-4xl text-center font-bold text-stone-200 uppercase">
                Never miss an offer
            </h2>
            <p className="text-center mt-4 mb-8 mx-16 text-lg leading-6 max-w-sm">
                Sign up to our newsletter and receive 10% off + free shipping on your next order
            </p>
            <img 
                src="./src/Images/drinking-coffee.jpg" 
                alt="girl sipping coffee"
                className="h-[34rem]" 
            />
            <input 
                type="email" 
                placeholder="john.smith@email.com" 
                className="bg-[#f3d7a8] placeholder:text-stone-600 text-stone-800 border border-stone-300 mt-6 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500 " 
            />
            <button className="bg-orange-500 px-5 py-2 mt-4 text-stone-100 rounded-md">
                Sign up
            </button>
        </section>
    )
}