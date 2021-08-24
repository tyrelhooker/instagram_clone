import React, { useRef } from 'react';

import Actions from './Actions';
import Comments from './Comments';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';

export default function Post({ content }) {
  // When user clicks on comment icon, the commentInput
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();

  return (
    <div className='col-span-4 rounded border bg-white mb-16'>
      <Header {...content} />
      <Image {...content} />
      <Actions {...content} handleFocus={handleFocus} />
      <Footer {...content} />
      <Comments {...content} commentInput={commentInput} />
    </div>
    // rounded border backgroundoffwhite mb16 border gray
    
  )
}