import OneStory from "./OneStory";
const Stories = () =>{

        const num = 20; // Number of images

        // Array to hold the required number of elements
        const stories = Array.from({ length: num });

        return (
            <div className="border-2 border-gray-200 w-[50rem]  overflow-scroll p-2 mt-2 ml-10">
                <div className="flex flex-row">{stories.map((index) => (
                    <OneStory/>
                ))}
                </div>
            </div>
        );
}
export default Stories;