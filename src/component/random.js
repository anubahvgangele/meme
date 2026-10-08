import React from "react";
import Hook from "../customHook/hook";
import Loader from "./loading";




 function Random(){

    const {gif,loading,fetchdata} = Hook()

    return (
    <>
        {loading ? (
            <Loader className />
        ) : (
            <div className="w-1/2 bg-green-500 border border-black rounded-md flex flex-col items-center gap-y-5 mt-[15px]">

                <h1 className="mt-[15px] font-bold underline text-2xl uppercase">
                    A Random Gif
                </h1>

                <img src={gif} width="450"  alt="Random Gif" />

                <button
                    onClick={() => fetchdata()}
                    className="bg-green/10 mb-5 w-9/12 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl px-6 py-3 text-white hover:bg-white/20 transition duration-300"
                >
                    Generate
                </button>

            </div>
        )}
    </>
);
}
export default Random;