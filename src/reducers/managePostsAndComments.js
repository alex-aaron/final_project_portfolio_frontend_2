export default function managePostsAndRestaurants(state = {
    posts: [],
    comments: []
  }, action) {
    switch (action.type) {
      case 'ADD_POST':

        const post = {
            id: 1,
            title: action.title,
            text: action.text
        }
        return { ...state, posts: [...state.posts, post] }
      case 'DELETE_POST':
        const posts = state.posts.filter(post => post.id !== action.id);
        return { ...state, posts };
    
      case 'ADD_COMMENT':
        const comment = {
          id: 1,
          postId: action.comment.postId,
          text: action.comment.text
        }
        return { ...state, comments: [...state.comments, comment] };

        case 'DELETE_REVIEW':
          const comments = state.comments.filter(comment => comment.id !== action.id)
          return { ...state, comments };
      
      default:
        return state;
    }
  };
