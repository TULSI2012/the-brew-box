import React from "react";
import ProductCard from "./ProductCard";
import products from "../data";

export default function BestSellers() {

    const bestSellers = products.filter(product => product.bestSeller === true)

    return (
        <section className="bg-[#31452C] text-stone-300 h-full p-10">
            <h2 className="text-4xl text-center font-bold text-stone-200">
                Our Best Sellers
            </h2>
            <div className="flex mt-10 gap-x-4 items-center overflow-x-scroll">
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