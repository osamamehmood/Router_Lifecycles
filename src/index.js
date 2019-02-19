import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Posts from './components/Posts';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PostItem from './components/PostItem';

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
        <Switch>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" exact component={Home}/>
          <Route render={() => <h3>Page not Found </h3>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));