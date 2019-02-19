import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const redirect = () => {
    props.history.push('/')
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