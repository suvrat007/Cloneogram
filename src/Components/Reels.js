import {useState} from "react";
import OneReel from "./OneReel";

const Reels = () =>{
    const num = 20;
    const reels = Array.from({ length: num });


    return(
        <div className=" w-[100%] h-screen flex text-center flex flex-wrap overflow-scroll ">
            {/*repeat each div*/}
            {reels.map((reel, index) => (<OneReel/>))}
        </div>
    )
}
export default Reels;