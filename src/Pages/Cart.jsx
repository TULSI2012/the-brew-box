import React, { useContext} from "react";
import products from "../data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";

export default function Cart() {

    {/* Pulling in necessary state and function from the ShopContext*/}
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    
    {/* Implementing the getTotalCartAmount function from the ShopContext and saving the value to a variable*/}
    const totalAmount = getTotalCartAmount() // ie totalAmount = 15

    return (
        <section className="min-h-screen px-6 py-10">
            <h1 className="text-4xl text-center">Your Cart</h1>
            <div className="flex flex-col mt-10 gap-y-8">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                    }
                })}
            </div>
            <div className="flex flex-col mt-10 mb-8 gap-y-4">
                <p className="text-xl font-semibold">Order Summary</p>
                <div>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Subtotal:</p>
                    <p className="text-sm text-gray-500">${totalAmount}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Shipping:</p>
                    <p className="text-sm text-gray-500">+$10.00</p>
                </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Total:</p>
                    <p className="font-semibold">${totalAmount + 10}.00</p>
                </div>
            </div>
            <div>
                <button className="w-full py-2 font-semibold text-white bg-orange-400 rounded-lg">
                    Checkout
                </button>
            </div>
        </section>
    )
}