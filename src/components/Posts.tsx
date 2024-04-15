import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    useEffect(() => {
        getPosts();
    }, []);

    const [posts, setPosts] = useState<Post[]>();

    const getPosts = async () => {
        try {
            const res: AxiosResponse<Post[]> = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=10`
            );
            setPosts(res.data);
            console.log(posts);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ul>
            {posts?.map((post) => (
                <li key={post.id}>
                    title: {post.title},
                    <div>body: {post.body} </div>
                    <hr />
                    <br />
                </li>
            ))}
        </ul>
    );
};

export default Posts;
