import React from "react";
import products from "../data";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

export default function AllProducts() {
    return (
        <section className="flex flex-col pb-8 items-center gap-4 bg-[#f3d7a8]">
            <div className="flex self-start mt-4 ml-4 gap-x-1 text-stone-600">
                <Link to="/">Home</Link>
                <p>/</p>
                <p>All Coffee</p>
            </div>
            <h2 className="my-8 text-4xl font-bold text-stone-800">
                All Coffee
            </h2>
            <div className="flex flex-wrap justify-center max-w-6xl gap-4">
                {/* mapping over product array and generating a card for each element in the data array */}
                {products.map(product => {
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
