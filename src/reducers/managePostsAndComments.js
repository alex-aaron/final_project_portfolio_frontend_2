import cuid from 'cuid';

export default function managePostsAndComments(state = {
    posts: [],
    comments: []
  }, action) {
    switch (action.type) {
      case 'LOADING_POSTS':
      return {
        ...state,
        posts: [...state.posts],
        loading: true
      }
      case 'ADD_POST':

        const post = {
            id: cuid(),
            title: action.post.title,
            text: action.post.text
        }
        return { ...state, posts: [...state.posts, post] }
      case 'DELETE_POST':
        const posts = state.posts.filter(post => post.id !== action.id);
        return { ...state, posts };
    
      case 'ADD_COMMENT':
        const comment = {
          id: cuid(),
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
