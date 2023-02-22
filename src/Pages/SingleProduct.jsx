import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

export default function SingleProduct() {

    const {productId} = useParams()

    const product = products.find(product => product.id == productId)

    console.log(product)

    return (
        <section>
            <h1>{product.title}</h1>
        </section>
    )
}