import React from 'react';
import './App.css';
import Gists from './components/gists/Gists'; 
import GistItem from './components/gists/GistItem'; 
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
 } from 'react-router-dom'

function App() {
  const About = <section> <h1>About me</h1> <p> HI I am shane!</p></section>
  return (
    <div className="App">
      <Router> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about">About</Link> 
            </li>
          </ul>
        </nav>
        <Switch> 
          
          <Route path="/about">
            {About}
          </Route>
          <Route path="/gist/:id" component={GistItem}/>
          <Route path="/" component={Gists}/>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
