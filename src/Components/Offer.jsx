import React from "react";

export default function Offer() {
    return (
        <section className="flex justify-center bg-gray-50 py-14">
            <div className="flex items-center justify-center w-1/2 h-56 bg-gray-900 rounded-md gap-x-8">
                <div>
                    <img src="./src/Images/offer.jpg" className="object-cover w-full h-56 rounded-l-md"/>
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase">Limited Offer</p>
                    <h3 className="text-4xl text-gray-200">20% off this friday with free gift</h3>
                    <button className="px-4 py-1 text-gray-800 bg-gray-100 rounded-md">Yes Please!</button>
                </div>
            </div>
        </section>
    )
}