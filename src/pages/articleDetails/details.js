import Article from "../../components/article/article";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import './details.css';
import {removeBlog} from "../../store/actions/blogActions";
import {home} from "../pagePaths";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function Details(props) {
    let  { id } = useParams();
    const [blog, setblog] = useState(null);
    const blogs = useSelector((state) => state.blog.blogs)
    useEffect(() => {
        const foundBlog = blogs.find(function (blog) {
            if (blog.id == id) {
                return true;
            } else {
                return false;
            }});
        setblog(foundBlog);
    },  [id, blogs]);

    const history = useHistory();
    const dispatch = useDispatch();

    const deleteBlog = () => {
        dispatch(removeBlog(blog));
        history.push(home);
    }

    return blog ? (
        <div className="blog-container-full">
            <img src={blog.image}/>
            <div>
                <button onClick={deleteBlog} type="button" className="btn btn-danger">✕</button>
            </div>
            <h1>{blog.title}</h1>
            <h2>{blog.summary}</h2>
            <div className="bottom-info">
                <p>{blog.mainPost}</p>
                <h3>{blog.poster}</h3>
                <h4>{blog.id}</h4>
            </div>
        </div>

    ) : (<h1>Nah, {id}</h1>)
}