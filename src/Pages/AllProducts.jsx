import React from "react";
import products from "../data";
import ProductCard from "../Components/ProductCard";

export default function AllProducts() {
    return (
        <section className="flex flex-wrap gap-4">
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
        </section>
    )
}