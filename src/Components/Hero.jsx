import React from "react";

export default function Hero() {
    return (
        <section className="bg-[#31452C] text-stone-300 h-full flex flex-col items-center py-10">
            <h1 className="mx-5 text-5xl font-bold text-center max-w-xl text-stone-200">Sip into something exceptional</h1>
            <p className="text-center mt-10 mx-16 text-l leading-6 max-w-lg">
                Elevate your coffee game and join the ranks of coffee
                connoisseurs with our exceptional blends. Order now and start
                your journey to coffee perfection.
            </p>
            <div className="mt-28 mb-5 bg-[#f3d7a8] w-96 justify-center px-10">
                <img src="./src/Images/coffee-bag.png" alt="american roast" className="-translate-y-16" />
            </div>
            <button className="bg-orange-500 mt-4 px-5 py-2 text-white font-bold rounded-md">
                Explore Range
            </button>
        </section>
    )
}