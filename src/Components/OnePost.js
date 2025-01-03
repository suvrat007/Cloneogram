const OnePost = () => {
    return(
        <div>
            <div className="flex flex-col w-[30rem] mb-10">
                <div className="flex flex-row border-2 border-gray-400 w-full">
                    {/*userid and picture    */}
                    <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                         className="w-14 rounded-full  m-2"/>
                    <p className="flex items-center justify-center ">@username</p>

                </div>
                <div className="">
                    {/*posts*/}
                    <img
                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-[35rem]"/>
                </div>
                <div>
                    {/*like and comment*/}
                    <div className="flex flex-row border-2 border-gray-400 w-full">
                        <p className="p-2 m-2">like</p>
                        <p className="p-2 m-2">comment</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnePost;