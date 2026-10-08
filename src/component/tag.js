
import Loader from "./loading";
import Hook from "../customHook/hook";
import { useState } from "react";




  function Tag(){
    
    const[tag,setTag] = useState("car");

    const {gif,loading,fetchdata} = Hook(tag);

    function changeHandler(event){
    
    setTag(event.target.value);
    
   }

   return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="w-1/2 bg-blue-500 border border-black rounded-md flex flex-col items-center gap-y-5 mt-[15px]">
                    <h1 className="mt-[15px] font-bold underline text-2xl uppercase">
                        A Random Gif
                    </h1>

                    <img src={gif} width="450" alt="Random Gif" />

                    <input
                        type="text"
                        value={tag}
                        placeholder="Enter something..."
                        className="bg-blue-500/10 mb-5 w-9/12 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl px-6 py-3 text-white hover:bg-white/20 transition duration-300"
                        onChange={changeHandler}
                    />

                    <button
                        onClick={() => fetchdata()}
                        className="bg-green-500/10 mb-5 w-9/12 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl px-6 py-3 text-white hover:bg-white/20 transition duration-300"
                    >
                        Generate
                    </button>
                </div>
            )}
        </>
    );
}
export default Tag;