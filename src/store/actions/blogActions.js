import {addBlogAction, removeBlogAction} from "../actionTypes";

export function addBlog(blog) {
    return function (dispatch) {
        dispatch({
            type: addBlogAction,
            blog: blog
        });
    };
}

export function removeBlog(blog) {
    return function (dispatch) {
        dispatch({
            type: removeBlogAction,
            blog: blog
        });
    };
}