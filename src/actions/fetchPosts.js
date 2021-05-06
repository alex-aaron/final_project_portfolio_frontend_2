export default function fetchPosts() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_POSTS' })
      fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(posts => dispatch({ type: 'ADD_POSTS', posts }));
    };
  } 