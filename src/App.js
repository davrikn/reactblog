import './App.css';
import { useDispatch, useSelector } from "react-redux";
//import { Switch, Route } from "react-router-dom";
//import React, { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    return (
    <div className="App">
        <h1>sugmeg</h1>
        {blogs.map(blog => {
            return (
                <h1>{blog.poster}</h1>
            )
        })}
    </div>
  );
}

export default App;
