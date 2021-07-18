import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
  const { photos } = useFollowedUsersPhotos();
  console.log(photos);
  // const photos = ['1', '2', '3', '4', '5'];
  // const photos = [];
  // const photos = null;
  return (
    <div className='container col-span-2'>
      {photos
        ?
          photos && photos.length > 0 
            ?
              photos.map((photo, i) => <p key={i}>I will be a photo</p>)
            :
              <p className='text-center text-2xl'>
                Follow people to see photos!
              </p>
        :
          <Skeleton count={1} width={320} height={400} className='mb-5' />
      }
      {/* <p>This is the timeline.</p>
      <div className='grid grid-cols-3'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div> */}
     
    </div>

  )
}