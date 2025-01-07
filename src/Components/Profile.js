import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import useUserData from "../Utils/useUserData";

const Profile = () =>{
    const num = 5; // Number of images
    const pics = Array.from({ length: num });

    const isFollowing = useSelector(store => store.following.followingList); // for number of following

    const {id} = useParams();
    // console.log(id);
    const data =useUserData(id);

    console.log(data);
    return(
        <div className="flex flex-col ml-[5%]">
            {/*<h1>Profile</h1>*/}
            <div className="flex flex-row m-10 ml-[10rem] font-semibold">
                {/*upper half with info*/}
                <img
                    src={data?.picture?.medium}
                className="w-[17%] m-2 rounded-full"/>

                <ul className="p-2 m-2 ml-[5rem] text-l">
                    <li>{data?.login?.username}</li>
                    <ul className="flex flex-row">
                        <ul className="flex flex-col p-2 m-2">
                            <li>{num}</li>
                            <li>Posts</li>
                        </ul>
                        <ul className="flex flex-col p-2 m-2">
                            <li>100</li>
                            <li>Followers</li>
                        </ul>
                        <ul className="flex flex-col p-2 m-2">
                            <li>{isFollowing.length}</li>
                            <li>Following</li>
                        </ul>

                    </ul>
                    <li>{data?.name?.first +" "+data?.name?.last}</li>
                    <li className="text-xs">{data?.location?.city}, {data?.location?.state}, {data?.location?.country} </li>
                </ul>

            </div>
            <div className="flex flex-row flex-wrap w-[95%] grid grid-cols-3">
                {pics.map((pic, index) => (<img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>))}

            </div>
        </div>
    )
}
export default Profile;