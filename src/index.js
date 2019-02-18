import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Posts from './components/Posts';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PostItem from './components/PostItem';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link><br />
          <Link to="/posts">Posts</Link><br />
          <Link to="/profile">Profile</Link><br />
        </header>
        <hr />
        <Route path="/" exact component={Home}/>
        <Route path="/posts" exact component={Posts}/>
        <Route path="/posts/:id" component={PostItem}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));