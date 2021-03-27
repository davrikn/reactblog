import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeBlog} from "../../store/actions/blogActions";
import {home} from "../../pages/pagePaths"

export default function Article(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    let blog = props.blog

    const deleteBlog = () => {
        dispatch(removeBlog(blog));
        history.push(home);
    }

    return (
        <div className="container-fluid">
            <h1>{blog.poster}</h1>
            <div>{blog.html}</div>
            <div>{blog.id}</div>
            <button onClick={deleteBlog} type="button" className="btn btn-danger">✕</button>

        </div>
    )
}