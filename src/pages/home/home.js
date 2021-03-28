import {Link} from "react-router-dom";
import {details, home, newBlog, searchPage} from "../pagePaths";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './home.css';
import errorImage from "./images/1200px-BSOD_Windows_8.svg.png";

export default function Home() {
    const blogs = useSelector((state) => state.blog.blogs);

    return (
    blogs.map(blog => {
        return (
            <div class="blog-container">
                <img src={blog.image}/>
                <h1>{blog.title}</h1>
                <h2>{blog.summary}</h2>
                <div class="bottom-info">
                    <h3>{blog.poster}</h3>
                    <Link to={"/details/" + blog.id} ><h4>{blog.id}</h4></Link>
                </div>
            </div>
        )
    })
    )


}