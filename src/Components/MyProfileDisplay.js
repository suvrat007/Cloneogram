const MyProfileDisplay = () =>{
    return (
        <div className="flex flex-col rounded-2xl border-2 mt-5">
            <div className="flex flex-row w-[20rem]">
                <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                className="w-[4rem] m-2 "/>
                <div className=" justify-center flex flex-col text-center ">
                    <p>@usename</p>
                    <p>User Name</p>
                </div>
            </div>

        </div>

    )
}
export default MyProfileDisplay;