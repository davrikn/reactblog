import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux"
export default function SearchPage() {
    let  { searchterm } = useParams();
    let blogs = useSelector((state) => state.blog.blogs);
    let hits = blogs.filter(blog => {return blog.id == searchterm || blog.poster == searchterm});

    return (
        <div>
            {hits.map(blog => {
            return (
                <div>
                    <h1>{blog.poster}</h1>
                    <Link to={"/details/" + blog.id} ><h1>{blog.id}</h1></Link>
                </div>
            )
        })}
        </div>
    )
}