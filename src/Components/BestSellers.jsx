import React from "react";
import ProductCard from "./ProductCard";
import products from "../data";

export default function BestSellers() {

    {/* filtering out only the products that have the best seller tag */}
    const bestSellers = products.filter(product => product.bestSeller === true)

    return (
        <section className="bg-[#31452C] text-stone-300 h-full p-10">
            <h2 className="text-4xl font-bold text-center text-stone-200">
                Our Best Sellers
            </h2>
            <div className="flex items-center mt-10 overflow-x-scroll gap-x-4">
                {/* mapping over best sellers array and generating a card for each element in the data array */}
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