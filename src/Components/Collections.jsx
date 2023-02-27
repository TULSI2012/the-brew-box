import React from "react";

export default function Collections() {
    return (
        <section className="bg-[#f3d7a8] p-10 flex flex-col gap-y-4 lg:flex-row lg:justify-center lg:gap-x-4">
            <div className="flex flex-col w-full lg:max-w-lg gap-y-4">
                <div className="relative w-full h-48 cursor-pointer group">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                    <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                        Roasters Choice Collection
                    </p>
                </div>
                <div className="flex gap-x-4">
                    <div className="relative w-full h-48 cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Seasonal Collection
                        </p>
                    </div>
                    <div className="relative w-full h-48 cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Espresso Collection
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:max-w-lg gap-y-4">
                <div className="flex gap-x-4">
                    <div className="relative w-full h-48 cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                            Ethiopia Collection
                        </p>
                    </div>
                    <div className="relative w-full h-48 cursor-pointer group">
                        <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                        <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                        Coloumbia Collection
                        </p>
                    </div>
                </div>
                <div className="relative w-full h-48 cursor-pointer group">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover w-full h-48 brightness-75" />
                    <p className="absolute bottom-0 left-0 px-4 py-2 text-2xl font-bold transition duration-500 ease-in-out text-stone-100 drop-shadow-xl group-hover:-translate-y-2">
                        Signature Collection
                    </p>
                </div>
            </div>
        </section>
    )
}
