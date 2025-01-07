import OnePost from "./OnePost";
import {useEffect, useState} from "react";

const Posts = () =>{
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        // console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log('fetch called');
        try {
            const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100');
            const json = await data.json();
            // console.log("Fetched data", json?.data?.data);

            //taking data and updating in hook variables.
            setListOfUsers(json?.data?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    // console.log(listOfUsers);
    return (
        <div className=" ml-10 ">
            {listOfUsers.map((post,index) => (<OnePost userData = {listOfUsers[index]}/>))}
        </div>
    )
}
export default Posts;