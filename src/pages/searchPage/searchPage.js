import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {removeBlog} from "../../store/actions/blogActions";

export default function SearchPage() {
    let  { searchterm } = useParams();
    let blogs = useSelector((state) => state.blog.blogs);
    let hits = blogs.filter(blog => {return blog.id == searchterm || blog.poster == searchterm || blog.html == searchterm});
    const dispatch = useDispatch();

    return (
        <div>
            {hits.map(blog => {
            return (
                <div>
                    <h1>{blog.poster}</h1>
                    <Link to={"/details/" + blog.id} ><h1>{blog.id}</h1></Link>
                    <button onClick={() => {dispatch(removeBlog(blog))}} type="button" className="btn btn-danger">✕</button>
                </div>
            )
        })}
        </div>
    )
}