import React from 'react';

import { hashFilter } from '../helper';

export default({color, data, handleLove, match:{params:{id}}}) => {
  return (
    <div className="main hashtag-main">
      <h3 className="title" style={{backgroundColor: color}}>HashTag: #{id}</h3>
      {hashFilter(data, id, color, handleLove)}
    </div>
  )
}
