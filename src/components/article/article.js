import {useParams} from "react-router-dom";

export default function Article(props) {
    let blog = props.blog
    return (
        <div className="container-fluid">
            <h1>{blog.poster}</h1>
            <div>{blog.html}</div>
            <div>{blog.id}</div>

        </div>
    )
}