import PostContainer from './containers/PostContainer';
import PostInput from './components/Posts/PostInput';
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
        <Route exact path="/new" component={PostInput} />
      </div>
    </Router>
  );
}

export default App;
