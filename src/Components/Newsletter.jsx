import React from "react";

export default function Newsletter() {
    return (
        <section className="flex flex-col items-center h-full px-6 pb-10 bg-gray-100">
            <h2 className="max-w-3xl text-4xl font-semibold text-center text-neutral-900">
                Subscribe to our newsletter to get updates on our latest products
            </h2>
            <p className="mt-4 text-sm text-center text-neutral-500">
                Get 20% off on your first order by subscribing below!
            </p>
            <div className="mt-6 flex flex-col items-center min-[540px]:flex-row min-[540px]:items-center min-[540px]:gap-x-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-lg shadow-sm placeholder:text-gray-400 text-neutral-800 focus:outline-none focus:border-gray-400 " 
                />
                <button 
                    className="w-24 py-2 mt-2 font-semibold text-center text-orange-500 border-2 border-orange-500 rounded-md cursor-pointer bg-none hover:bg-orange-500 hover:text-white min-[540px]:mt-0">
                    Sign up
                </button>
            </div>
            <p className="mt-4 text-xs text-center text-neutral-400">
                You will be able to unsubscribe at any time.
            </p>
        </section>
    )
}