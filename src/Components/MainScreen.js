import HeroScreen from "./HeroScreen";
import OptionsTab from "./OptionsTab";
const MainScreen = () =>{
    return (
        <div className="flex">
            <OptionsTab />
            <HeroScreen />
        </div>
    )
}
export default MainScreen;