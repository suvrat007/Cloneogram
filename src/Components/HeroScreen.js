import Header from "./Header";
import Posts from "./Posts";
import Recommended from "./Recommended";
const HeroScreen = () =>{
    return(
        <div>
            {/*<a>header</a>*/}
            <Header />
            <Posts />
            <Recommended />
        </div>
    )
}
export default HeroScreen;