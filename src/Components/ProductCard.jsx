import React from "react";

export default function ProductCard({img, bean, title, price}) {
    return (
        <div className="bg-[#f3d7a8] text-stone-800 py-6 px-4 h-[28rem] w-64 shrink-0 rounded-md flex flex-col justify-between cursor-pointer">
            <span className="bg-orange-900 text-stone-200 py-1 pl-2 rounded-2xl w-16 text-xs">
                {bean}
            </span>
            <div className="flex justify-center">
                <img src={img} alt="best seller coffee" className="h-56" />
            </div>
            <p className="text-2xl font-bold">
                {title}
            </p>
            <div className="flex justify-between items-center">
                <button className="bg-orange-500 px-5 py-2 text-stone-100 rounded-md hover:bg-orange-600">
                    Order Now
                </button>
                <p className="font-bold">
                    from ${price}.00
                </p>
            </div>
        </div>
    )
}