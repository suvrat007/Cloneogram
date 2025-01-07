import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearchDisplay} from "../Utils/searchSlice";
import {cancel} from "../Utils/constants";
import {useEffect, useState} from "react";
import Recommended from "./Recommended";

const SearchTab = () => {
    const dispatch = useDispatch();
    function handleSearchTab (){
        dispatch(setSearchDisplay(false));
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [listOfUsers, setListOfUsers] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        // console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log('fetch called');
        try {
            const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100');
            const json = await data.json();
            setListOfUsers(json?.data?.data); // Set fetched users
            setResults(json?.data?.data);    // Initially show all users
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    const handleSearchFunc = (e) =>{
        const value = e.target.value;
        setSearchQuery(value);
        setResults(
            listOfUsers.filter(user =>
                user.name?.first?.toLowerCase().includes(value.toLowerCase()))
        );
    }

    return(
        <div className="h-screen border-r-2 flex flex-col text-xl p-6 mr-10 fixed h-screen ">
            <div className="flex flex-row justify-center m-5 w-[10rem]">
                <input type="text"
                       placeholder="enter first name"
                       value={searchQuery}
                       onChange={handleSearchFunc}
                       className="border-2 pl-4 pb-1 ml-10 rounded-2xl"/>
                <img src={cancel}
                     onClick={() => handleSearchTab()}
                     className="h-8 w-6 cursor-pointer"/>
            </div>
            <div className="flex flex-col">
                {results.length > 0 ? (
                    results.map((user, index) => (
                        <Recommended key={user.id || index} user={user} />
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    )
}
export default SearchTab;