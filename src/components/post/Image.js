import React from 'react';

export default function Image({ imageSrc, caption }) {
  // console.log('content in image comp', imageSrc);
  return (
    <div className='post__img'>
      <img src={imageSrc} alt={caption}></img>
    </div>
  );
}