import OneStory from "./OneStory";
const Stories = () =>{

        const num = 20; // Number of images

        // Array to hold the required number of elements
        const stories = Array.from({ length: num });

        return (
            <div className="flex flex-row border-2 border-gray-200 w-8/12 overflow-scroll p-2 mt-2 ml-10">
                <div className="flex flex-row">{stories.map((index) => (
                    // <OneStory/>
                    <img
                        key={index} // Unique key for each element
                        src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
                        className="w-1/12 p-1 m-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        alt={`Story ${index + 1}`}
                    />
                ))}
                </div>

            </div>
        );
}
export default Stories;