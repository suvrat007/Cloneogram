import {Outlet} from "react-router-dom";
import OptionsTab from "./OptionsTab";

const Body = () =>{
    return (
        <div className="flex ">
            <OptionsTab/>
            <Outlet/>
        </div>

    )
}
export default Body;