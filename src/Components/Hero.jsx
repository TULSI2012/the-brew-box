import React from "react";

export default function Hero() {
    return (
        <section className="bg-green-900 text-stone-300 h-screen flex flex-col items-center pt-10">
            <h1 className="text-5xl font-bold text-center max-w-xl text-white">Sip into something exceptional</h1>
            <p className="text-center mt-10 mx-10 text-l leading-6">
                Elevate your coffee game and join the ranks of coffee
                connoisseurs with our exceptional blends. Order now and start
                your journey to coffee perfection.
            </p>
            <div className="mt-20 bg-orange-100 w-80 rounded-full flex justify-center">
                <img src="./src/Images/American-roast.png" alt="american roast" className="-translate-y-12" />
            </div>
            <button className="bg-orange-400 mt-4 px-5 py-2 text-white font-bold rounded-md">
                Order Now
            </button>
        </section>
    )
}