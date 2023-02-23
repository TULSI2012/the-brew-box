import React, {useContext} from "react";
import { ShopContext } from "../context/shop-context";

export default function CartItem(props) {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    console.log(props.id)

    return (
        <div className="flex gap-x-4">
            <div className="px-6 py-3 bg-gray-100 rounded-lg">
                <img src={props.image} alt="cart-item" className="w-16" />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="font-semibold">{props.title}</h1>
                    <p className="text-sm text-gray-600">${props.price}.00</p>
                </div>
                <div className="flex items-center w-24 pb-2 gap-x-4">
                    <button
                        className="items-center w-8 text-gray-600 border rounded-full" 
                        onClick={() => removeFromCart(props.id)}>-</button>
                    <p>{cartItems[props.id]}</p>
                    <button 
                        className="items-center w-8 text-gray-500 border rounded-full" 
                        onClick={() => addToCart(props.id)}>+</button>
                </div>
            </div>
        </div>
    )
}