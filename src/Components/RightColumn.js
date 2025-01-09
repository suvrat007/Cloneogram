import Recommended from "./Recommended";
import MyProfileDisplay from "./MyProfileDisplay";
import {useEffect, useState} from "react";

const RightColumn = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [currentRange, setCurrentRange] = useState(0);


    useEffect(() => {
        // console.log('use effect call');
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRange((prevRange) => (prevRange + 5) % listOfUsers.length); // Move by 5 and loop back
        }, 100000);

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [listOfUsers]);

    const fetchData = async () => {
        // console.log('fetch called');
        try {
            const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100');
            const json = await data.json();
            // console.log("Fetched data", json?.data?.data);

            //taking data and updating in hook variables.
            setListOfUsers(json?.data?.data);
            // console.log(json?.data?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const visibleUsers = listOfUsers.slice(currentRange, currentRange + 5);
    // console.log(listOfUsers[68]);

    return(
        <div className="flex flex-col ml-[2rem]">
            <MyProfileDisplay/>
            <h3 className="text-lg mt-2 p-2">Recommended</h3>
            {visibleUsers.map((user, index) => (
                <Recommended  key={index} user={user}/>))}
        </div>
    )
}
export default RightColumn;