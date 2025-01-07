import {useEffect, useState} from "react";
import {data, Link} from "react-router-dom";

const MyProfileDisplay = () =>{
    const [user, setUser] = useState([]);

    useEffect(() => {
        // console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log('fetch called');
        try {
            const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers/69');
            const json = await data.json();
            // console.log("Fetched data", json?.data);

            //taking data and updating in hook variables.
            setUser(json?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
// console.log("Fetched data", user?.data);
    }
    return (
        <div className="flex flex-col rounded-2xl border-2 mt-5">
            <div className="flex flex-row w-[20rem]">
                <img src={user?.picture?.medium}
                className="w-[4rem] m-2 rounded-full"/>
                <div className="flex flex-col ml-2 justify-center ">
                    <p><Link to={"profile/"+user?.id}>{user?.login?.username}</Link></p>
                    <p>{user?.name?.first + " " +user?.name?.last}</p>
                </div>
            </div>

        </div>

    )
}
export default MyProfileDisplay;