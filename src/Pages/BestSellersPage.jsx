import React from "react";
import products from "../data";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

export default function AllProducts() {

    //filtering the products array to only include BestSeller products
    const bestSellers = products.filter(product => product.bestSeller === true)

    return (
        <section className="flex flex-col items-center gap-4 px-10 pb-24 bg-gray-50">
            <div className="flex self-start mt-4 ml-4 gap-x-1 text-neutral-600">
                <Link to="/">Home</Link>
                <p>/</p>
                <p>Best Sellers</p>
            </div>
            <h2 className="my-8 text-4xl font-bold text-neutral-800">
                Best Sellers
            </h2>
            <div className="flex flex-wrap justify-center max-w-5xl gap-4">
                {/* mapping over collectionArray and generating a card for each element in the array */}
                {bestSellers.map(product => {
                    return <ProductCard 
                                key={product.id} 
                                id={product.id}
                                img={product.image}
                                bean={product.bean}
                                title={product.title}
                                price={product.price}
                            />
                })}
            </div>
        </section>
    )
}
