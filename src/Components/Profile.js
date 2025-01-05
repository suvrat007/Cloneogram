
const Profile = () =>{
    const num = 10; // Number of images

    // Array to hold the required number of elements
    const pics = Array.from({ length: num });
    return(
        <div className="flex flex-col ml-[5%]">
            {/*<h1>Profile</h1>*/}
            <div className="flex flex-row border-2 w-56 m-10 ml-[10rem] font-semibold">
                {/*upper half with info*/}
                <img
                    src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"/>

                <ul className="p-2 m-2 ml-[5rem] text-l">
                    <li>@username</li>
                    <ul className="flex flex-row">
                        <ul className="flex flex-col p-2 m-2">
                            <li>100</li>
                            <li>Posts</li>
                        </ul>
                        <ul className="flex flex-col p-2 m-2">
                            <li>100</li>
                            <li>Followers</li>
                        </ul>
                        <ul className="flex flex-col p-2 m-2">
                            <li>100</li>
                            <li>Following</li>
                        </ul>

                    </ul>
                    <li>User Name</li>
                    <li>Bio</li>
                </ul>

            </div>
            <div className="flex flex-row flex-wrap w-[95%] grid grid-cols-3">
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>
                <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="p-2 h-[25rem] w-[25rem]"/>


            </div>
        </div>
    )
}
export default Profile;