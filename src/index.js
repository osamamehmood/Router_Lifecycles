import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Posts from './components/Posts';

const App = () => {
  return(
    <div>
      Main Page
      <Profile />
      <Home />
      <Posts />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));