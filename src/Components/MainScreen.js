import Middle from "./Middle";
import OptionsTab from "./OptionsTab";
import RightColumn from "./RightColumn";
const MainScreen = () =>{
    return (
        <div className="flex flex-row w-full">
            <Middle />
            <RightColumn/>
        </div>
    )
}
export default MainScreen;