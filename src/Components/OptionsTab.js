const OptionsTab = () =>{
    return(

        <div className="w-2/12 h-screen bg-gray-400 flex flex-col justify-between text-xl pr-10 mr-10">
            <div className="flex flex-col justify-center m-12 ">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
                     className="mb-8"
                     alt="camera"/>
                <h3 className="mb-4">Home</h3>
                <h3 className="mb-4">Search</h3>
                <h3 className="mb-4">Notifications</h3>
                <h3 className="mb-4">Reels</h3>
                <h3 className="mb-4">Profile</h3>
            </div>
            <div className=" flex flex-col justify-center m-12">
                <h3>More</h3>
            </div>
        </div>

    )
}
export default OptionsTab;