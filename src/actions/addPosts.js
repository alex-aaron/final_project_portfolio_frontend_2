
export default function addPosts(newPost) {
    return (dispatch) => {
        dispatch({ type: 'ADD_POST'})
    }
}