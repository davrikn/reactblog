import {addBlog} from "../actionTypes";

const initialState = {
    counter: 0,
    blogs: []
};

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case addBlog:
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

        default:
            return state
    }

}