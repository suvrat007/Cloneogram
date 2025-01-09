import {Link} from "react-router-dom";

const OneStory = ({user}) =>{


    // console.log(pic);
    return (

        <div className="m-2 ">
            <img
                src={user?.picture?.medium}
                className="w-[4rem] flex items-center m-2 p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"/>
            <a className="flex items-center text-xs"><Link to={"profile/"+user?.id}>{user?.login?.username}</Link></a>

        </div>
    )
}
export default OneStory;