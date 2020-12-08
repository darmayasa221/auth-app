
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './container/Login/Login';
import Signup from './container/Signup/Signup';
function App() {
  return (
    <Router>
      <Link to='/'>home.js</Link>
      <Link to='/login'>Login.js</Link>
      <Link to='/signup'>Login.js</Link>
      <br/>
      <Switch>
      <Route  path="/" exact component={Home}/>
      <Route  path="/login" exact component={Login}/>
      <Route  path="/signup" exact component={Signup}/>
      </Switch>
     </Router>
  );
}

export default App;
