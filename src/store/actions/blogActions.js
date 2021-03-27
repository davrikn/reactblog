export function addBlog(blog) {
    return function (dispatch) {
        dispatch({
            type: "ADD_BLOG",
            blog: blog
        });
    };
}