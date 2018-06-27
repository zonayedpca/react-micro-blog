import React, {Component} from 'react';

import { singleContent } from '../helper';

export default class SingleContent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.color !== nextProps.color) {
      return true;
    }
    return false;
  }
  render() {
    const {data, color, handleLove} = this.props;
    const { author, love } = data;
    return (
      <div className="single-content">
        <img alt="profile-pic" src="https://placeimg.com/40/40/people" />
        <h3>{author}</h3>
        <p>{singleContent(data, color)}</p>
        <ul>
          <li><button style={{backgroundColor: love ? '#e91e63' : color}} className="btn-love" onClick={() => handleLove(data)} >{love ? 'Loved' : 'Love'}</button></li>
        </ul>
      </div>
    )
  }
}
