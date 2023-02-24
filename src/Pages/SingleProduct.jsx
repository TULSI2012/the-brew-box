import React, {useState, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";
import { ShopContext } from "../context/shop-context";

export default function SingleProduct() {
    const [quantity, setQuantity] = useState(1)

    const { addToCart, cartItems } = useContext(ShopContext)
     
    const {productId} = useParams()

    {/* Finding the product that matches the productID found with useParams */}
    const product = products.find(product => product.id == productId)

    function addItem(){
        setQuantity(quantity => quantity + 1)
    }

    function subtractItem() {
        if(quantity === 1) {
            return quantity
        }
        setQuantity(quantity => quantity - 1)
    }

    const cartItemAmount = cartItems[product.id]

    return (
        <section className="px-6 pb-10">
            <div className="flex self-start mt-4 text-xs gap-x-1 text-stone-500">
                <Link to="/">Home</Link>
                <p>/</p>
                <Link to="/all">All Coffee</Link>
                <p>/</p>
                <p>{product.title}</p>
            </div>
            <div className="lg:flex lg:gap-x-8">
                <div className="flex justify-center w-3/4 py-6 mx-auto my-6 bg-gray-200 lg:w-1/2 lg:mx-0">
                    <img src={product.image} className="w-1/2"/>
                </div>
                <div className="lg:my-6 lg:w-1/2 lg:mr-10 lg:text-xl">
                    <h1 className="mb-4 text-3xl font-semibold lg:text-5xl">
                        {product.title}
                    </h1>
                    <div className="flex justify-between mb-8">
                        <p className="font-semibold">
                            Quantity:
                        </p>
                        <div className="flex gap-x-2">
                            <button 
                                onClick={subtractItem}
                                className="px-4 bg-gray-300">
                                    -
                            </button>
                            <p>
                                {quantity}
                            </p>
                            <button
                                onClick={addItem} 
                                className="px-4 bg-gray-300">
                                    +
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-8 gap-y-2 lg:gap-y-4">
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
                        <button 
                            onClick={() => addToCart(product.id)}
                            className="px-5 py-2 font-bold text-white bg-orange-500 rounded-md">
                                Add to Cart
                        </button>
                    </div>
                    <Link to="/cart">
                        <button
                            className="w-full px-5 py-2 font-bold text-white bg-gray-500 rounded-md lg:w-1/4">
                                View Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                        </button>
                    </Link>
                    <p className="text-xs text-gray-400">
                        *Orders are roasted to Order.
                    </p>
                    <p className="text-xs text-gray-400">
                        *Only the freshest coffee arives at your doorstep.
                    </p>
                </div>
            </div>
        </section>
    )
}