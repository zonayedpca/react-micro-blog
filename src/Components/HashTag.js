import React from 'react';

import { findHash } from '../helper';

export default({hashData, color}) => {
  return (
    <div className="hashtag-area">
      <h3>HashTag</h3>
      <ul>
        {findHash(hashData, color)}
      </ul>
    </div>
  )
}
