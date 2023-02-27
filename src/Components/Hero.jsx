import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-[url('./Images/hero-bg.jpg')] flex flex-col h-screen bg-cover bg-top py-10 lg:[background-position-x:250px] bg-no-repeat bg-black lg:py-28 lg:px-10">
            <h1 className="max-w-2xl mx-5 text-6xl font-bold text-white lg:text-7xl">Sip into something exceptional</h1>
            <p className="max-w-md mx-5 mt-4 leading-6 text-gray-100">
                Elevate your coffee game and join the ranks of coffee
                connoisseurs with our exceptional blends. Order now and start
                your journey to coffee perfection.
            </p>
            <Link to="/all" className="w-40 px-5 py-2 mx-5 mt-4 font-semibold text-orange-500 border-2 border-orange-500 rounded-md cursor-pointer bg-none hover:bg-orange-500 hover:text-black">
                Explore Range
            </Link>
        </section>
    )
}