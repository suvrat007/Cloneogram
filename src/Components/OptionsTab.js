import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleSearchDisplay} from "../Utils/searchSlice";
import SearchTab from "./SearchTab";
import {useState} from "react";
import {home, notif, prof, reel, search} from "../Utils/constants";
import profile from "./Profile";

const OptionsTab = () =>{
    const dispatch = useDispatch();
    const isSearchOn = useSelector(store => store.search.isSearchOn);

    function handleSearchDisplay(){
        dispatch(toggleSearchDisplay())
    }

    if(isSearchOn) return <SearchTab/>;


    return(
        <div className="h-screen border-r-2 flex flex-col justify-between text-xl pr-10 mr-10 fixed h-screen">
            <div className="flex flex-col justify-center m-10 w-[8rem]">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
                     className="mb-8"
                     alt="camera"/>
                <div className="flex flex-row w-8">
                    <img src={home}/>
                    <h3 className="mb-4 pt-2 m-2"><Link to="/">Home</Link></h3>
                </div>
                <div className="flex flex-row w-8">
                    <img src={search}/>
                    <h3 className="mb-4 pt-2 m-2 cursor-pointer"
                        onClick={() => handleSearchDisplay()}>
                        Search
                    </h3>
                </div>
                <div className="flex flex-row w-8">
                    <img src={notif}/>
                    <h3 className="mb-4 pt-2 m-2">Notifications</h3>
                </div>
                <div className="flex flex-row w-8">
                    <img src={reel}/>
                    <h3 className="mb-4 pt-2 m-2"><Link to="/reels">Reels</Link></h3>
                </div>
                <div className="flex flex-row w-8">
                <img src={prof}/>
                    <h3 className="mb-4 pt-2 m-2"><Link to="/profile">Profile</Link></h3>
                </div>





            </div>
            <div className=" flex flex-col justify-center m-12">
                <h3>More</h3>
            </div>
        </div>

    )
}
export default OptionsTab;