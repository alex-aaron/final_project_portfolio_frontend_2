import PostContainer from './containers/PostContainer';
import PostShow from './components/Posts/PostShow'
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
      </div>
    </Router>
  );
}

export default App;
