import {useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

// Need documentId to figure out what document we are working with. It is reference to the document so you can change it. handleFocus - when user clicks on comment icon, this will focus the user to the comment input field.
export default function Actions({ docId, likes, userLikedPhoto: likedPhoto, handleFocus }) {
  const {
    user: { uid: userId ='' }
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [totalLikes, setTotalLikes] = useState(likes.length);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  // console.log(likes);
  // console.log(toggleLiked);

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);
    // if (toggleLiked) {
    //   setToggleLiked(!toggleLiked);
    //   console.log('insideHandlerToggleLiked', toggleLiked);
    // } else {
    //   setToggleLiked(toggleLiked);
    //   console.log('going from false to true', toggleLiked);
    // }

    await firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
       });
    
    setTotalLikes((totalLikes) => (toggleLiked ? totalLikes - 1 : totalLikes + 1));    
  }

  // TODO: fix the liked heart filling black instead of red
  return (
    <>
      <div className='flex justify-between p-4'>
        <div className='flex'>
          <svg
            onClick={() => handleToggleLiked((toggleLiked) => !toggleLiked )}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                  handleToggleLiked((toggleLiked) => !toggleLiked);
              }
            }}
            className={`w-8 mr-4 select-none cursor-pointer ${
                toggleLiked ? 'fill-current text-red-500' : 'text-black'
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
          <svg
            onClick={handleFocus}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleFocus();
              }
            }}
            className='w-8 text-black-light select-none cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            tabIndex={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </div>
      </div>
      <div className='p-4 py-0'>
        <p className='font-bold'>{totalLikes === 1 ? `${totalLikes} like` : `${totalLikes} likes`}</p>
      </div>
    </>
  )
}