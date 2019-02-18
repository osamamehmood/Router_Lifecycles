import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}> Take me to /profile/posts </Link> <br/>
      Profile
    </div>
  )
}

export default Profile;