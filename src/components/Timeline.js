import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
  // const { photos } = [];
  const { photos = {}} = useFollowedUsersPhotos();
  console.log(photos);

  return (
    <div className='container col-span-2'>
      {!photos
        ?
          <Skeleton count={4} width={320} height={400} className='mb-5' />
        :
          photos && photos.length > 0 
            ?
              photos.map((photo) => (
                // <>
                  // <img key={photo.docId} src={photo.imageSrc} alt='Followed User Resource' />
                // </>
                <p key={photo.docId}>{photo.username}</p>
              ))

            :
              <p className='text-center text-2xl'>
                Follow people to see photos!
              </p>
      }
    </div>

  )
}