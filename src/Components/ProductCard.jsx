import React from "react";

export default function ProductCard() {
    return (
        <div className="bg-[#f3d7a8] text-stone-800 py-6 px-4 w-64 shrink-0 rounded-md">
            <div className="flex justify-center mb-4">
                <img src="./src/Images/coffee-bag.png" alt="best seller coffee" className="h-56" />
            </div>
            <span className="bg-orange-900 text-stone-100 px-4 py-1 rounded-2xl">
                100% Arabica
            </span>
            <p className="text-2xl font-bold mt-2 mb-6">
                Viennese Coffee - Blend
            </p>
            <div className="flex justify-between items-center">
                <button className="bg-orange-500 px-5 py-2 text-stone-100 rounded-md">
                    Order Now
                </button>
                <p className="font-bold">
                    from $15.00
                </p>
            </div>
        </div>
    )
}