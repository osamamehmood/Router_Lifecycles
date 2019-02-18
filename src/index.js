import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Posts from './components/Posts';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link><br />
          <Link to="/posts">Posts</Link><br />
          <Link to={{pathname: "/profile"}}>Profile</Link><br />
        </header>
        <hr />
        <Route path="/" exact component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));