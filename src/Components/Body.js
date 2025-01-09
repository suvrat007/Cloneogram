import {Outlet} from "react-router-dom";
import OptionsTab from "./OptionsTab";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddUsers} from "../Utils/AllUserListSlice";

const Body = () =>{
    const dispatch = useDispatch();
    const userList = useSelector((store) => store.userList.users); // Access users from Redux store
    const fetched = useSelector((store) => store.userList.fetched); // Access users from Redux store

    // console.log("render")


    const fetchData = useCallback(async () => {
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
    },[dispatch])

    useEffect(() => {
        // Fetch data only if userList is empty
        if (!fetched) {
            fetchData();
        }
    }, [fetched,fetchData]);

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