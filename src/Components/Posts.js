import OnePost from "./OnePost";

const Posts = () =>{
    const num = 10; // Number of images

    // Array to hold the required number of elements
    const posts = Array.from({ length: num });
    return (
        <div className="border-2 border-gray-400 ml-10">
            {posts.map((post, index) => (<OnePost/>))}

        </div>
    )
}
export default Posts;