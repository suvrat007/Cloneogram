const OneStory = ({pic , username}) =>{

    // console.log(pic);
    return (

        <div className="m-2 ">
            <img
                src={pic}
                className="w-[4rem] flex items-center m-2 p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"/>
            <a className="flex items-center text-xs">{username}</a>

        </div>
    )
}
export default OneStory;