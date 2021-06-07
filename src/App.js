import PostContainer from './containers/PostContainer';
import PostShow from './components/Posts/PostShow'
import MostCommentsContainer from './containers/MostCommentsContainer'
import NavBar from './components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={PostContainer} />
        <Route exact path={`/posts/:postId`} render={routerProps => <PostShow {...routerProps} />} />
        <Route exact path="/most_comments" component={MostCommentsContainer} />
        <Route exact path="/awards" component={AwardContainer} />
      </div>
    </Router>
  );
}

export default App;
