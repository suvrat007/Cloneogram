import {Outlet} from "react-router-dom";
import OptionsTab from "./OptionsTab";

const Body = () =>{
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