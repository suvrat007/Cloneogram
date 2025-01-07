import Recommended from "./Recommended";
import MyProfileDisplay from "./MyProfileDisplay";
import {useEffect, useState} from "react";

const RightColumn = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        // console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log('fetch called');
        try {
            const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5');
            const json = await data.json();
            // console.log("Fetched data", json?.data?.data);

            //taking data and updating in hook variables.
            setListOfUsers(json?.data?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }
    return(
        <div className="flex flex-col ml-[2rem]">
            <MyProfileDisplay/>
            <h3 className="text-lg mt-2 p-2">Recommended</h3>
            {listOfUsers.map((post, index) => (
                <Recommended username={listOfUsers[index]?.login?.username} name={listOfUsers[index]?.name?.first + " " +listOfUsers[index]?.name?.last} pic={listOfUsers[index]?.picture?.medium} />))}

        </div>
    )
}
export default RightColumn;