import React from "react";

export default function Offer() {
    return (
        <section className="flex justify-center px-6 bg-gray-50 py-14">
            <div className="flex items-center h-56 max-w-lg bg-gray-900 rounded-md sm:max-w-3xl">
                <div>
                    <img src="./src/Images/offer.jpg" className="hidden object-cover h-56 rounded-l-md sm:block"/>
                </div>
                <div className="px-4">
                    <p className="mb-2 text-xs tracking-wider text-gray-400 uppercase">Limited Offer</p>
                    <h3 className="mb-2 text-3xl text-gray-200">20% off this friday with free gift</h3>
                    <button className="px-4 py-1 text-gray-800 bg-gray-100 rounded-md">Yes Please!</button>
                </div>
            </div>
        </section>
    )
}