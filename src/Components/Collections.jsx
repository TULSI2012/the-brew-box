import React from "react";

export default function Collections() {
    return (
        <section className="bg-[#f3d7a8] p-10 flex flex-col gap-y-4">
            <div className="w-full h-48 relative group cursor-pointer">
                <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                    Roasters Choice Collection
                </p>
            </div>
            <div className="flex gap-x-4">
                <div className="w-full h-48 relative group cursor-pointer">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                    <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                        Seasonal Collection
                    </p>
                </div>
                <div className="w-full h-48 relative group cursor-pointer">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                    <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                        Espresso Collection
                    </p>
                </div>
            </div>
            <div className="flex gap-x-4">
                <div className="w-full h-48 relative group cursor-pointer">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                    <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                        Ethiopia Collection
                    </p>
                </div>
                <div className="w-full h-48 relative group cursor-pointer">
                    <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                    <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                       Coloumbia Collection
                    </p>
                </div>
            </div>
            <div className="w-full h-48 relative group cursor-pointer">
                <img src="./src/Images/coffee-cups.jpg" alt="coffee-cup" className="object-cover h-48 w-full brightness-75" />
                <p className="text-stone-100 font-bold text-2xl px-4 py-2 drop-shadow-xl group-hover:-translate-y-0.5 transition ease-in-out absolute bottom-0 left-0">
                    Signature Collection
                </p>
            </div>
        </section>
    )
}

/* improvements:
    -hover effects: underline text and add movement to image
    -desktop responsiveness: flip grid so that its two rows high
*/