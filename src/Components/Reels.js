import {useEffect, useState} from "react";
import OneReel from "./OneReel";
import data from "../Utils/reelsDemoAPi.json"
const Reels = () =>{

    // const[vidId, setVidId] = useState([]);
    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const fetchData = async () => {
    //     const data = await fetch(data.videourl)
    //     const json = await data.json();
    //     setVidId(json?.data?.data);
    //     // console.log(json?.data?.data);
    // }



    console.log(data);
    return(
        <div className=" w-[100%] h-screen flex text-center flex flex-wrap overflow-scroll ">
            {/*repeat each div*/}
            {/*{vidId.map((vidId, index) => (<OneReel id={vidId?.items?.id} key={index}/>))}*/}
            {data.map((reel,index)=> (<OneReel key={index} id={data[index]}/>))}
        </div>
    )
}
export default Reels;