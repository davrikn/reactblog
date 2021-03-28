import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./pages/articleDetails/details";
import Home from "./pages/home/home";
import NewBlog from "./pages/newBlogForm/newBlog";
import NavBar from "./components/navBar/navBar";
import {details, home, newBlog, searchPage} from "./pages/pagePaths";
import {NotFound} from "./pages/errorPages/errorPages";
import { Link } from "react-router-dom";
import SearchPage from "./pages/searchPage/searchPage";


function App() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);


    return (

    <div className="App">

        <NavBar />
        <div class="main-container">
        <Switch>
            <Redirect exact from="/" to={home} />
            <Route exact path={searchPage} component={SearchPage} />
            <Route exact path={home} component={Home} />
            <Route exact path={details} component={Details}/>
            <Route exact path={newBlog} component={NewBlog} />
            <Route path="/" component={NotFound}/>
        </Switch>
        </div>


    </div>
  );
}

export default App;
