import Profile from "./Profile";
import {Link} from "react-router-dom";

const Recommended = ({user}) =>{
    // console.log(user)

    return (
        <div>
            <ul className="flex bg-gray-200 rounded-2xl p-2 flex-col mt-1">
                <li className="flex flex-row w-[20rem] mb-1">
                    <img src={user?.picture?.medium}
                         className="w-[4rem] rounded-full"/>
                    <div className="ml-2 flex flex-col justify-center ">
                        <p
                           className="cursor-pointer"><Link to={"profile/"+user?.id}>{user?.login?.username}</Link></p>
                        <p>{user?.name?.first +" "+user?.name?.last}</p>
                    </div>
                </li>
            </ul>
        </div>

    )
}
export default Recommended;