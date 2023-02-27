import React from "react";
import products from "../data";
import ProductCard from "../Components/ProductCard";
import { Link, useParams } from "react-router-dom";

export default function AllProducts() {
    //pulling in the parameter from the url
    const {collection} = useParams()

    //filtering the products array based on the collection chosen
    const collectionArray = products.filter(product => product.collection == collection)

    return (
        <section className="flex flex-col pb-8 items-center gap-4 bg-[#f3d7a8]">
            <div className="flex self-start mt-4 ml-4 gap-x-1 text-stone-600">
                <Link to="/">Home</Link>
                <p>/</p>
                <p>{collection} Collection</p>
            </div>
            <h2 className="my-8 text-4xl font-bold text-stone-800">
                {collection} Collection
            </h2>
            <div className="flex flex-wrap justify-center max-w-6xl gap-4">
                {/* mapping over collectionArray and generating a card for each element in the array */}
                {collectionArray.map(product => {
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
