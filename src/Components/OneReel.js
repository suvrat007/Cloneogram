import {useEffect, useRef, useState} from "react";

const OneReel = ({id}) => {
    const [like,setLike] = useState("https://www.svgrepo.com/show/13666/heart.svg");
    const [save,setSave] = useState("https://www.svgrepo.com/show/505218/bookmark-outline.svg");
    // console.log(id);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const onScroll = () => {
            if (!videoElement) return;

            const rect = videoElement.getBoundingClientRect();
            const videoHeight = rect.height;
            const screenHeight = window.innerHeight;

            // Check if 50% of the video is visible
            const isHalfVisible =
                rect.top + videoHeight * 0.5 >= 0 &&
                rect.top + videoHeight * 0.5 <= screenHeight;

            if (isHalfVisible) {
                videoElement.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}',
                    "*"
                );
            } else {
                videoElement.contentWindow.postMessage(
                    '{"event":"command","func":"pauseVideo","args":""}',
                    "*"
                );
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <div className=" h-[90%] w-[35%] m-6 mb-2 ml-[25%] mr-[30%] rounded-3xl items-center">
            <div className="w-full rounded-xl h-full flex flex-row">
                {/*<img*/}
                {/*    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"*/}
                {/*    className="w-full rounded-3xl h-full"/>*/}
                {/*<video src={"https://www.youtube.com/watch?v=" + id} className="w-full rounded-3xl h-full"></video>*/}
                {/*<iframe class="w-full h-full rounded-3xl"*/}
                {/*        frameborder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowfullscreen"*/}
                {/*        src={id}>*/}
                {/*</iframe>*/}
                <iframe
                    ref={videoRef}
                    className="w-full h-full rounded-3xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
                    src={`${id?.videoUrl}?enablejsapi=1&autoplay=1&loop=1&playlist=${id?.videoUrl.split('/').pop()}`}
                />
                <div className=" mt-[70%] flex flex-col  translate-x-0.5 m-1 ">
                    <img
                        onClick={() => {
                            like === "https://www.svgrepo.com/show/13666/heart.svg" ? setLike("https://www.svgrepo.com/show/384408/favorite-heart-like-love-romance-valentine.svg") : setLike("https://www.svgrepo.com/show/13666/heart.svg");
                        }}
                        src={like} className="p-2 w-12"/>
                    <p className="mb-4 ml-1 mr-3">22k</p>
                    <img src="https://www.svgrepo.com/show/522067/comment-1.svg" className="p-2 w-12 "/>
                    <p className="mb-4 ml-1 mr-3">2k</p>
                    <img src="https://www.svgrepo.com/show/506747/share-1.svg" className="p-2 w-14 "/>
                    <p className="mb-4 ml-1 mr-3 ">share</p>
                    <img
                        onClick={() => {
                            save === "https://www.svgrepo.com/show/505218/bookmark-outline.svg" ? setSave("https://www.svgrepo.com/show/505216/bookmark.svg") : setSave("https://www.svgrepo.com/show/505218/bookmark-outline.svg");
                        }}
                        src={save} className="w-12"/>
                    <p className="mb-4 ml-3 mr-3 ">save</p>
                </div>
            </div>
            <div className="flex flex-row w-full translate-x-0.5 -mt-20 text-white ">
                {/*userid and picture    */}
                <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                     className="w-14 rounded-full  m-2"/>
                <p className="flex items-center justify-center ">{id?.author}</p>

            </div>


        </div>

    )
}
export default OneReel;