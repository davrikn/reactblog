import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";



function App() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    return (
    <div className="App">
        {blogs.map(blog => {
            return (
                <h1>{blog.poster}</h1>
            )
        })}

        <Switch>
            <Route exact path="/"
                   render={() => <h1>Home</h1>}
            />
            <Route exact path="/details:id"
                   render={() => <h1>item details</h1>}
            />
            <Route exact path="/newBlog"
                    render={() => <h1>new Blog</h1>}/>
        </Switch>


    </div>
  );
}

export default App;
