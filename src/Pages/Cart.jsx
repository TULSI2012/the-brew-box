import React, { useContext} from "react";
import products from "../data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {

    {/* Pulling in necessary state and function from the ShopContext*/}
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    
    {/* Implementing the getTotalCartAmount function from the ShopContext and saving the value to a variable*/}
    const totalAmount = getTotalCartAmount() // ie totalAmount = 15

    const cartIsEmpty = (products.filter(product => cartItems[product.id] !== 0)).length === 0 ? true : false

    return (
        <section className="min-h-screen px-6 py-10">
            <h1 className="text-4xl font-bold text-center sm:text-5xl">Your Cart</h1>
            {cartIsEmpty ? <h2 className="mt-10 text-xl text-center">You have no items in your cart</h2> : 
            
            <>
            <div className="flex flex-col mt-10 gap-y-8">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                    }
                })}
            </div>
            <div className="max-w-md mx-auto">
                <div className="flex flex-col mt-10 mb-8 gap-y-4">
                    <p className="text-xl font-semibold">Order Summary</p>
                    <div>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Subtotal:</p>
                        <p className="text-sm text-gray-500">${totalAmount}.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Shipping:</p>
                        <p className="text-sm text-gray-500">+ $10.00</p>
                    </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Total:</p>
                        <p className="font-semibold">${totalAmount + 10}.00</p>
                    </div>
                </div>
                <div className="mb-4">
                    <button className="w-full py-2 font-semibold text-white bg-orange-400 rounded-lg">
                        Checkout
                    </button>
                </div>
                <div>
                    <Link to="/all">
                        <button to="/all" className="w-full py-2 font-semibold text-gray-200 bg-gray-800 rounded-lg">
                            Back to Shop
                        </button>
                    </Link>
                </div>
            </div>
            </>
        }
        </section>
    )
}