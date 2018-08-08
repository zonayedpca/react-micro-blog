import React from 'react';
import { Route } from 'react-router-dom';

import TextArea from './TextArea';
import Main from './Main';
import HashTagMain from './HashTagMain';
import HashTag from './HashTag';

export default({color, auth, data, handleSubmission, handleLove}) => {
  return (
    <section className="container">
      <div className="left-sidebar">
        <TextArea color={color} auth={auth} data={data} handleSubmission={handleSubmission} />
      </div>
      <Route exact path="/" render={() => <Main color={color} data={data} handleLove={handleLove} />} />
      <Route exact path={`/hashtag/:id`} render={(props) => <HashTagMain {...props} color={color} data={data.filter(oneData=>oneData.body.includes('#'))} handleLove={handleLove} />} />
      <div className="right-sidebar">
        <HashTag color={color} hashData={data} />
      </div>
    </section>
  )
}
