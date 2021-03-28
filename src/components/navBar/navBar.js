import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";
import {home, newBlog} from "../../pages/pagePaths";
import { useHistory } from "react-router-dom";
import "./navBar.css";


export default function NavBar() {
    const [searchword, setSearchword] = useState("");
    let history = useHistory();

    const search = () => {
        let url = "/search/" + searchword;
        history.push(url)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={home}>BlogBar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to={home}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to={newBlog}>New Post</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input value={searchword} onChange={(e) => setSearchword(e.target.value)} className=" mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </div>
        </nav>
    )
}