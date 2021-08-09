import React from 'react';
import { Link } from 'react-router-dom';

export default function Comments ({ comments }) {
  return (
    <div>
      <p>Comments</p>
      {comments.map((item) => 
        <div className=' my-2'>
          <Link to={`/p/${item.displayName}`} className='pr-2'>
            {`${item.displayName}:`}
          </Link>
          <span>{`${item.comment}`}</span>

          
        </div>
      )}
    </div>
  )
}

