import React from "react";
import ProductCard from "./ProductCard";

export default function BestSellers() {
    return (
        <section className="bg-[#31452C] text-stone-300 h-full p-10">
            <h2 className="text-4xl text-center font-bold text-stone-200">
                Our Best Sellers
            </h2>
            <div className="flex mt-10 gap-x-4 items-center overflow-x-scroll">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}