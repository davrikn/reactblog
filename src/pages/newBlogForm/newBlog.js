import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBlog} from "../../store/actions/blogActions";

export default function NewBlog() {
    const [image, setImage] = useState("");
    const [poster, setPoster] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [mainPost, setMainPost] = useState("");
    const dispatch = useDispatch();
    const [addedBlog, setAddedBlog] = useState(false);




    const handleClick = () => {
        const blog = {
            image: image,
            poster: poster,
            title: title,
            summary: summary,
            mainPost: mainPost
        }

        dispatch(addBlog(blog));
        setAddedBlog(true);
        setTimeout(() => {setAddedBlog(false)},2000);

        setImage("");
        setPoster("");
        setTitle("");
        setSummary("");
        setMainPost("");
    }

    return (
        <div>
            {addedBlog ? (
                <p className="bg-primary" style={{color:"white"}} id="blog-added">Successfully added blog</p>
            ) : (<p>Add blog</p>)}
            <form>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Image URL"
                           value={image}
                           onChange={(e) => setImage(e.target.value)}

                    />
                </div>
                <div className="form-group">
                    <label>Poster</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Name of poster"
                           value={poster}
                           onChange={(e) => setPoster(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Title of post"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Summary</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Summary/undertitle of post"
                           value={summary}
                           onChange={(e) => setSummary(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Main Post</label>
                    <textarea type="text"
                              className="form-control"
                              placeholder="Main post"
                              value={mainPost}
                              onChange={(e) => setMainPost(e.target.value)}
                    />
                </div>

                <div className="btn btn-primary"
                     onClick={handleClick}
                >Submit Post</div>
            </form>
        </div>
    )
}