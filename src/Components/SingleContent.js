import React from 'react';

import { singleContent } from '../helper';

export default({data, color, handleLove}) => {
  const { author, love } = data;

  return (
    <div className="single-content">
      <img alt="profile-pic" src="https://placeimg.com/40/40/people" />
      <h3>{author}</h3>
      <p>{singleContent(data, color)}</p>
      <ul>
        <li><button style={{backgroundColor: color}} className="btn-love" onClick={() => handleLove(data)} >{love ? 'Loved' : 'Love'}</button></li>
      </ul>
    </div>
  )
}
