import React, {useContext} from "react";
import { ShopContext } from "../context/shop-context";

export default function CartItem(props) {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    console.log(props.id)

    return (
        <div>
            <img src={props.image} alt="cart-item" className="w-24" />
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <div>
                <button onClick={() => removeFromCart(props.id)}>-</button>
                <p>{cartItems[props.id]}</p>
                <button onClick={() => addToCart(props.id)}>+</button>
            </div>
        </div>
    )
}