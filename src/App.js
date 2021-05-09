import PostContainer from './containers/PostContainer';
import PostShow from './components/Posts/PostShow'
import MostCommentsContainer from './containers/MostCommentsContainer'
// import PostInput from './components/Posts/PostInput';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import NewPostButton from './components/NewPostButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={PostContainer} />
        <Route exact path={`/posts/:postId`} render={routerProps => <PostShow {...routerProps} />} />
        <Route exact path="/most_comments" component={MostCommentsContainer} />
      </div>
    </Router>
  );
}

export default App;
