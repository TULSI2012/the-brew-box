import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({id, img, bean, title, price}) {
    return (
        <Link to={`/products/${id}`}>
            <div className="bg-gray-100 text-neutral-900 px-2 h-[20rem] w-64 rounded-md flex flex-col cursor-pointer duration-200 ease-in-out hover:bg-gray-200">
                <div className="flex justify-center mt-2">
                    <img src={img} alt="best seller coffee" className="h-56" />
                </div>
                <p className="mt-4 text-lg">
                    {title}
                </p>
                <p className="text-sm">
                    from ${price}.00
                </p>
            </div>
        </Link>
    )
}

