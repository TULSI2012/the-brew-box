import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

export default function SingleProduct() {

    const {productId} = useParams()

    {/* Finding the product that matches the productID found with useParams */}
    const product = products.find(product => product.id == productId)

    return (
        <section className="px-6 pb-10 text-xl">
            <div className="flex self-start mt-4 gap-x-1 text-stone-500">
                <Link to="/">Home</Link>
                <p>/</p>
                <Link to="/all">All Coffee</Link>
                <p>/</p>
                <p>{product.title}</p>
            </div>
            <div className="w-3/4 mx-auto my-6">
                <img src={product.image}/>
            </div>
            <h1 className="mb-4 text-3xl font-semibold">
                {product.title}
            </h1>
            <div className="flex justify-between mb-8">
                <p className="font-semibold">
                    Quantity:
                </p>
                <div className="flex gap-x-2">
                    <button className="px-4 bg-gray-300">
                        -
                    </button>
                    <p>1</p>
                    <button className="px-4 bg-gray-300">
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col mb-8 gap-y-2">
                <div className="flex justify-between border-b-2">
                    <p className="font-semibold">
                        Flavours:
                    </p>
                    <p className="text-base">
                        {product.flavours}
                    </p>
                </div>
                <div className="flex justify-between border-b-2">
                    <p className="font-semibold">
                        Geography:
                    </p>
                    <p className="text-base">
                        {product.geography}
                    </p>
                </div>
                <div className="flex justify-between border-b-2">
                    <p className="font-semibold">
                        Beans:
                    </p>
                    <p className="text-base">
                        {product.bean}
                    </p>
                </div>
                <div className="flex justify-between border-b-2">
                    <p className="font-semibold">
                        Collection:
                    </p>
                    <p className="text-base">
                        {product.collection}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between mb-8">
                <p className="font-semibold">
                    ${product.price}.00
                </p>
                <button className="px-5 py-2 font-bold text-white bg-orange-500 rounded-md">
                    Add to Cart
                </button>
            </div>
            <p className="text-xs text-gray-400">
                *Orders are roasted to Order.
            </p>
            <p className="text-xs text-gray-400">
                *Only the freshest coffee arives at your doorstep.
            </p>
        </section>
    )
}