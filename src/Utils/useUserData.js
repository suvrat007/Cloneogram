import {useEffect, useState} from "react";

const useUserData = (id) => {

    const [info,setInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers/'+ id );
        const json = await data.json();
        setInfo(json?.data);
        // console.log(json?.data);
    }
    return info;
}

export default useUserData;