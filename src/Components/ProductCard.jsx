import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({id, img, bean, title, price}) {
    return (
        <Link to={`/products/${id}`}>
            <div className="bg-[#f3d7a8] text-stone-800  py-2 px-2 h-[24rem] w-56 shrink-0 rounded-md flex flex-col cursor-pointer">
                <span className="w-16 py-1 pl-2 text-xs bg-orange-900 text-stone-200 rounded-2xl">
                    {bean}
                </span>
                <div className="flex justify-center mt-2">
                    <img src={img} alt="best seller coffee" className="h-56" />
                </div>
                <p className="mt-4 text-2xl">
                    {title}
                </p>
                <p>
                    from ${price}.00
                </p>
            </div>
        </Link>
    )
}

