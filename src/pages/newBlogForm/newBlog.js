import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBlog} from "../../store/actions/blogActions";

export default function NewBlog() {
    const [poster, setPoster] = useState("");
    const [html, setHTML] = useState("")
    const dispatch = useDispatch();



    const handleClick = () => {
        const blog = {
            poster: poster,
            html: html
        }

        dispatch(addBlog(blog));
    }

    return (
        <form>
            <div className="form-group">
                <label>Poster</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter poster"
                       value={poster}
                       onChange={(e) => setPoster(e.target.value)}

                />
            </div>
            <div className="form-group">
                <label>Post HTML</label>
                <input type="text"
                       className="form-control"
                       placeholder="Raw post html"
                       value={html}
                       onChange={(e) => setHTML(e.target.value)}
                />
            </div>

            <div className="btn btn-primary"
                    onClick={handleClick}
            >Submit</div>
        </form>
    )
}