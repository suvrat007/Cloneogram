import {Link} from "react-router-dom";


const Following = ({user, id}) =>{

    const findUserById = (id) => {
        const dude = user.find((guy) => guy?.id === id);

        // If user is found, return it; otherwise return an error message
        return dude ? dude : null;
    };

    const following = findUserById(id);

    // console.log(following);
    return(
        <div>
            <ul className="flex bg-gray-100 rounded-2xl p-2 flex-col mt-1">
                <li className="flex flex-row w-[20rem] mb-1">
                    <img src={following?.picture?.medium}
                         className="w-[4rem] rounded-full"/>
                    <div className="ml-2 flex flex-col justify-center ">
                        <p
                            className="cursor-pointer"><Link to={"profile/" + following?.id}>{following?.login?.username}</Link>
                        </p>
                        <p>{following?.name?.first + " " + following?.name?.last}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Following;