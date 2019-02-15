import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Posts from './components/Posts';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path="/posts" component={Posts}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));