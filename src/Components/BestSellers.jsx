import React from "react";
import ProductCard from "./ProductCard";
import products from "../data";
import { Link } from "react-router-dom";

export default function BestSellers() {

    //filtering out only the products that have the best seller tag and slicing the array to only display 3 out of 8 
    const bestSellers = products.filter(product => product.bestSeller === true)
    const bestSellersFour = bestSellers.slice(0, 3)

    return (
        <section className="h-full p-10 bg-neutral-100">
            <h2 className="text-4xl font-bold text-neutral-900">
                Our Best Sellers
            </h2>
            <div className="flex items-center mt-10 overflow-x-scroll gap-x-4 min-[880px]:flex-wrap min-[880px]:justify-center">
                
                {/* mapping over best sellers array and generating a card for each element in the data array */}
                {bestSellersFour.map(product => {
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

            {/* Links to a page that displays all products with the bestSeller key set to true */}
            <Link 
                to="/best-sellers"
                className="block w-32 py-1 mx-auto mt-10 font-semibold text-center text-orange-500 border-2 border-orange-500 rounded-md cursor-pointer bg-none hover:bg-orange-500 hover:text-black">
                View All
            </Link>
        </section>
    )
}