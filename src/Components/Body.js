import {Outlet} from "react-router-dom";
import OptionsTab from "./OptionsTab";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddUsers} from "../Utils/AllUserListSlice";

const Body = () =>{
    const dispatch = useDispatch();
    const userList = useSelector((store) => store.userList.users); // Access users from Redux store

    useEffect(() => {
        // Fetch data only if userList is empty
        if (userList.length === 0) {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100"
            );
            const json = await data.json();
            // console.log("Fetched data", json?.data?.data);

            // Dispatch data to the store
            dispatch(AddUsers(json?.data?.data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return (
        <div className="flex flex-row">
            <div className="w-2/12">
                <OptionsTab/>
            </div>
            <div className="w-10/12">
                <Outlet/>
            </div>

        </div>

    )
}
export default Body;