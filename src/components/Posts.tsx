
import useFetch from "../hooks/useFetch";



const Posts: React.FC = () => {
    const [data] = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)

    return (
        <ul>
            {data?.map((data) => (
                <li key={data.id}>
                    title: {data.title},
                    <div>body: {data.body} </div>
                    <hr />
                    <br />
                </li>
            ))}
        </ul>
    );
};

export default Posts;
