import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {
  const redir = () => {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}> Take me to /profile/posts </Link> <br/>
      Profile
      {redir()}
    </div>
  )
}

export default Profile;