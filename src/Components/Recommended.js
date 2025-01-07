const Recommended = ({username , name, pic}) =>{
    return (
        <div>
            <ul className="flex border-2 rounded-2xl p-2 flex-col mt-1">
                <li className="flex flex-row w-[20rem] mb-1">
                    <img src={pic}
                         className="w-[4rem] rounded-full"/>
                    <div className="ml-2 flex flex-col justify-center ">
                        <p>{username}</p>
                        <p>{name}</p>
                    </div>
                </li>
            </ul>
        </div>

    )
}
export default Recommended;