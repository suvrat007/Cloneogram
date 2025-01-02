import Stories from "./Stories";
import MyProfileDisplay from "./MyProfileDisplay";
const Header = () =>{
    return (
        <div className="flex">
            {/*<a>header</a>*/}
            <Stories />
            <MyProfileDisplay/>
        </div>
    )
}
export default Header;