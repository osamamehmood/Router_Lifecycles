import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      {props.match.params.id}
      {/* gets the id from the props object to render on the screen */}
    </div>
  )
}

export default PostItem;