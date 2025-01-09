import { useEffect, useRef, useState } from "react";

const OneReel = ({ id }) => {
    const [like, setLike] = useState("https://www.svgrepo.com/show/13666/heart.svg");
    const [save, setSave] = useState("https://www.svgrepo.com/show/505218/bookmark-outline.svg");
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    videoElement?.play(); // Play the video when 50% is visible
                } else {
                    videoElement?.pause(); // Pause the video otherwise
                }
            },
            {
                threshold: [0.4], // Trigger when 50% of the video is visible
            }
        );

        if (videoElement) observer.observe(videoElement);

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, []);
    const handleMuteClick = () =>{
        (isMuted) ? setIsMuted(false) : setIsMuted(true);
    }

    return (
        <div className="h-[90%] w-[35%] m-6 mb-2 ml-[25%] mr-[30%] rounded-3xl items-center">
            <div className="w-full rounded-xl h-full flex flex-row">
                <video
                    ref={videoRef}
                    src={`${id?.videoUrl}`} // Use your video source here
                    className="w-[90%] bg-black h-full rounded-3xl"
                    loop
                    muted = {isMuted}
                    onClick={handleMuteClick}
                />
                <div className="mt-[70%] flex flex-col translate-x-0.5 m-1 ">
                    <img
                        onClick={() =>
                            setLike((prev) =>
                                prev === "https://www.svgrepo.com/show/13666/heart.svg"
                                    ? "https://www.svgrepo.com/show/384408/favorite-heart-like-love-romance-valentine.svg"
                                    : "https://www.svgrepo.com/show/13666/heart.svg"
                            )
                        }
                        src={like}
                        className="p-2 w-12"
                    />
                    <p className="mb-4 ml-1 mr-3">22k</p>
                    <img
                        src="https://www.svgrepo.com/show/522067/comment-1.svg"
                        className="p-2 w-12 "
                    />
                    <p className="mb-4 ml-1 mr-3">2k</p>
                    <img
                        src="https://www.svgrepo.com/show/506747/share-1.svg"
                        className="p-2 w-14 "
                    />
                    <p className="mb-4 ml-1 mr-3 ">share</p>
                    <img
                        onClick={() =>
                            setSave((prev) =>
                                prev === "https://www.svgrepo.com/show/505218/bookmark-outline.svg"
                                    ? "https://www.svgrepo.com/show/505216/bookmark.svg"
                                    : "https://www.svgrepo.com/show/505218/bookmark-outline.svg"
                            )
                        }
                        src={save}
                        className="w-12"
                    />
                    <p className="mb-4 ml-3 mr-3 ">save</p>
                </div>
            </div>
            <div className="flex flex-row w-full translate-x-0.5 -mt-20 text-white ">
                <img
                    src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                    className="w-14 rounded-full m-2"
                />
                <p className="flex items-center justify-center ">{id?.author}</p>
            </div>
        </div>
    );
};

export default OneReel;
