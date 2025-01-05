import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearchDisplay} from "../Utils/searchSlice";
import {cancel} from "../Utils/constants";

const SearchTab = () => {
    const dispatch = useDispatch();
    function handleSearchTab (){
        dispatch(setSearchDisplay(false));
    }
    return(
        <div className="h-screen border-r-2 flex flex-col justify-between text-xl pr-10 mr-10 fixed h-screen ">
            <div className="flex flex-row justify-center m-12 w-[10rem]">
                <input type="text" placeholder="enter username" className="border-2 pl-4 pb-1  ml-10 rounded-2xl"/>

                <img src={cancel}
                     onClick={() => handleSearchTab()}
                     className="h-8 w-6 cursor-pointer"/>
            </div>
        </div>
    )
}
export default SearchTab;