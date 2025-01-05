import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleFollowing} from "../Utils/followSlice";

const OnePost = () => {
    const [like,setLike] = useState("https://www.svgrepo.com/show/13666/heart.svg");
    const [save,setSave] = useState("https://www.svgrepo.com/show/505218/bookmark-outline.svg");
    const dispatch = useDispatch();
    function handleFollow (){
        dispatch(toggleFollowing())
    }
    const isFollowing = useSelector(store=>store.follow.isFollowing);

    return(
        <div>
            <div className="flex flex-col w-[30rem] mb-10 ml-[20%] mt-4 border-b-2">
                <div className="flex flex-row w-full">
                    {/*userid and picture    */}
                    <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                         className="w-12 rounded-full m-1"/>
                    <p className="flex items-center justify-center ">@username</p>
                    <p
                        className="flex items-center m-2 "
                    onClick={()=>handleFollow()}>
                        {isFollowing ? "Unfollow" : "Follow"}
                    </p>
                </div>
                <div className="">
                    {/*posts*/}
                    <img
                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-[35rem]"/>
                </div>
                <div className="flex flex-col w-full">
                    {/*like and comment*/}
                    <div className="flex flex-row ">
                        <img
                            onClick={() => {
                                like === "https://www.svgrepo.com/show/13666/heart.svg" ? setLike("https://www.svgrepo.com/show/384408/favorite-heart-like-love-romance-valentine.svg") : setLike("https://www.svgrepo.com/show/13666/heart.svg");
                            }}
                            src={like} className="p-2 w-10"/>
                        <img src="https://www.svgrepo.com/show/522067/comment-1.svg" className="p-2 w-10 "/>
                        <div className="">
                            <img
                                onClick={() => {
                                    save === "https://www.svgrepo.com/show/505218/bookmark-outline.svg" ? setSave("https://www.svgrepo.com/show/505216/bookmark.svg") : setSave("https://www.svgrepo.com/show/505218/bookmark-outline.svg");
                                }}
                                src={save} className="w-12"/>
                        </div>

                    </div>
                    <div className="">
                        <p className="m-2">200k likes</p>
                        <input type="text" className="p-2  w-full focus:outline-none" placeholder="Add Comment..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnePost;