import {addBlog} from "../actionTypes";

const initialState = {
    blogs: [
        {
            poster: "David",
            html: "<h2>The post and other stuff</h2>"
        },
    ]
};

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case addBlog:
            return {
                ...state,
                blogs: [
                    ...state.blogs,
                    action.blog
                ]
            };

        default:
            return state
    }

}