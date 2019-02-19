import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const redirect = () => {
    props.history.push('/')
    // redirects user to the home page. Call this function if user is unauthorized
    // Atm redirects to home upon clikcing profile link
  }

  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}> Take me to /profile/posts </Link> <br/>
      Profile
      {redirect()}
    </div>
  )
}

export default Profile;