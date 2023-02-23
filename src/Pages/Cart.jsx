import React, { useContext} from "react";
import products from "../data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";

export default function Cart() {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    
    const totalAmount = getTotalCartAmount()

    return (
        <section>
            <h1>Your Cart</h1>
            <div>
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                    }
                })}
            </div>
            <div>
                <p>total: ${totalAmount}</p>
            </div>
        </section>
    )
}