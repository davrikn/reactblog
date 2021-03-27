import {addBlogAction, removeBlogAction} from "../actionTypes";

const initialState = {
    counter: 0,
    blogs: []
};

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case addBlogAction:
            return {
                ...state,
                counter: state.counter + 1,
                blogs: [
                    ...state.blogs,
                    {
                        poster: action.blog.poster,
                        html: action.blog.html,
                        id: state.counter
                    }
                ]
            };

        case removeBlogAction:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog.id != action.blog.id)
            }


        default:
            return state
    }

}