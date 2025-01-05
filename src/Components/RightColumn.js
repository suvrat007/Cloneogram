import Recommended from "./Recommended";
import MyProfileDisplay from "./MyProfileDisplay";

const RightColumn = () => {
    return(
        <div className="flex flex-col ml-[2rem]">
            <MyProfileDisplay/>
            <h3 className="text-lg mt-2 p-2">Recommended</h3>
            <Recommended />
        </div>
    )
}
export default RightColumn;