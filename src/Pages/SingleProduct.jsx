import React, {useState, useContext} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import products from "../data";
import { ShopContext } from "../context/shop-context";

export default function SingleProduct() {
    const [quantity, setQuantity] = useState(1)

    const { addToCart, cartItems } = useContext(ShopContext)
     
    const {productId} = useParams()
    const navigate = useNavigate();

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
        <section className="px-10 pb-10 bg-gray-50 min-h-screen">
            <div className="flex self-start mt-4 text-xs gap-x-1 text-stone-500 mx-auto max-w-7xl">
                <Link to="/">Home</Link>
                <p>/</p>
                <Link to="/all">All Coffee</Link>
                <p>/</p>
                <p>{product.title}</p>
            </div>
            <div className="lg:flex lg:gap-x-8 max-w-7xl mx-auto">
                <div className="flex justify-center w-3/4 max-w-lg py-6 mx-auto my-6 bg-gray-100 rounded-md lg:w-1/2 lg:mx-0">
                    <img src={product.image} className="w-1/2"/>
                </div>
                <div className="max-w-3xl mx-auto lg:my-6 lg:w-1/2 lg:mr-10 lg:text-xl">
                    <h1 className="mb-4 text-3xl font-semibold text-neutral-800 lg:text-5xl">
                        {product.title}
                    </h1>
                    <div className="flex justify-between mb-8">
                        <p className="text-base font-semibold">
                            Quantity:
                        </p>
                        <div className="flex gap-x-2">
                            <button 
                                onClick={subtractItem}
                                className="px-4 bg-gray-200">
                                    -
                            </button>
                            <p className="pt-1 text-base">
                                {quantity}
                            </p>
                            <button
                                onClick={addItem} 
                                className="px-4 bg-gray-200">
                                    +
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-8 gap-y-2 lg:gap-y-4">
                        <div className="flex justify-between border-b-2">
                            <p className="font-semibold text-neutral-800">
                                Flavours:
                            </p>
                            <p className="text-base text-neutral-700">
                                {product.flavours}
                            </p>
                        </div>
                        <div className="flex justify-between border-b-2">
                            <p className="font-semibold text-neutral-800">
                                Geography:
                            </p>
                            <p className="text-base text-neutral-700">
                                {product.geography}
                            </p>
                        </div>
                        <div className="flex justify-between border-b-2">
                            <p className="font-semibold text-neutral-800">
                                Beans:
                            </p>
                            <p className="text-base text-neutral-700">
                                {product.bean}
                            </p>
                        </div>
                        <div className="flex justify-between border-b-2">
                            <p className="font-semibold text-neutral-800">
                                Collection:
                            </p>
                            <p className="text-base text-neutral-700">
                                {product.collection}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-8">
                        <p className="font-semibold text-neutral-800">
                            ${product.price}.00
                        </p>
                        <button 
                            onClick={() => addToCart(product.id)}
                            className="px-5 py-2 text-base font-semibold bg-gray-800 rounded-md hover:bg-gray-600 text-gray-50">
                                Add to Cart
                        </button>
                    </div>
                        <button
                            onClick={() => navigate("/cart")}
                            className="w-full max-w-md px-5 py-2 mx-32 mb-10 text-base font-semibold text-gray-800 border-2 border-gray-800 rounded-md bg-none lg:w-1/4 lg:mx-0">
                                View Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                        </button>
                    <p className="text-xs text-neutral-500">
                        *Orders are roasted to Order.
                    </p>
                    <p className="text-xs text-neutral-500">
                        *Only the freshest coffee arives at your doorstep.
                    </p>
                </div>
            </div>
        </section>
    )
}