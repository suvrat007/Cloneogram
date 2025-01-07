import OneStory from "./OneStory";
import {useEffect, useState} from "react";
const Stories = () =>{

        const [listOfUsers, setListOfUsers] = useState([]);
        useEffect(() => {
                // console.log('use effect call');
                fetchData();
        }, []);

        const fetchData = async () => {
                // console.log('fetch called');
                try {
                        const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
                        const json = await data.json();
                        console.log("Fetched data", json?.data?.data);

                        //taking data and updating in hook variables.
                        setListOfUsers(json?.data?.data);
                } catch (error) {
                        console.error("Error fetching data:", error);
                }

        }
        // console.log(listOfUsers[0]?.picture?.large);
        return (
            <div className=" w-[50rem] overflow-scroll p-2 mt-2 ml-10">
                <div className="flex flex-row">{listOfUsers.map((post,index) => (
                    <OneStory pic={listOfUsers[index]?.picture?.medium} username={listOfUsers[index]?.login?.username}/>
                ))}
                </div>
            </div>
        );
}
export default Stories;