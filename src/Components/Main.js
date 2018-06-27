import React from 'react';

import SingleContent from './SingleContent';

export default({color, data, handleLove}) => {
  const show = data.map(singleData => <SingleContent key={singleData.id} color={color} data={singleData} handleLove={handleLove} />);

  return (
    <div className="main">
      {show}
    </div>
  )
}
