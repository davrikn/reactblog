import Article from "../../components/article/article";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {useState, useEffect} from "react";

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

    return blog ? (
        <div>
            <Article blog={blog}/>
        </div>
    ) : (<h1>Nah, {id}</h1>)
}