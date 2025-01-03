const MyProfileDisplay = () =>{
    return (
        <div >
            <div className="p-2 ml-10 m-2 border-4 border-gray-400 w-[20rem] h-[10rem] flex flex-row">
                <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                className="rounded-full w-[4rem] border-2 border-gray-400 p-2 m-8"/>
                <div className="p-2 m-2 justify-center items-center object-center ">
                    <p>@usename</p>
                    <p>User Name</p>
                </div>
            </div>
        </div>
    )
}
export default MyProfileDisplay;