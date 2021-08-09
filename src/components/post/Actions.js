import React, {useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

// Need documentId to figure out what document we are working with. It is reference to the document so you can change it. handleFocus - when user clicks on comment icon, this will focus the user to the comment input field.
export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }) {
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  //TODO: fix this handlToggleLiked logic
  const handleToggleLiked = async () => {
    if (!toggleLiked) {
      setToggleLiked(true);
    } else {
      setToggleLiked(false);
    }
  }

  return (
    <>
      <div className='flex justify-between p-4'>
        <div className='flex'>
          <svg
            onClick={() => handleToggleLiked((toggleLiked) => !toggleLiked)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                  handleToggleLiked((toggleLiked) => !toggleLiked);
              }
            }}
            className={`w-8 mr-4 select-none cursor-pointer ${
                toggleLiked ? 'fill-red text-red' : 'text-black'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}