import React from 'react';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import SingleContent from './Components/SingleContent';

export const findHash = (data, color) => {
  data = data.filter(oneData => (oneData.body.includes(' #') || oneData.body.startsWith('#')) ? oneData:null);
  data = data.map(oneData=>oneData.body);
  data = data.reduce((allData, oneData) => allData +=' ' + oneData);
  data = data.split(' ');
  data = data.filter(oneData => (oneData.includes(' #') || oneData.startsWith('#')));
  let allTag = [];
  data = data.filter((oneData) => allTag.includes(oneData) ? null: allTag.push(oneData));
  data = data.map(oneData => <li key={oneData}><Link style={{color}} to={`/hashtag/${removeHash(oneData)}`}>{oneData}</Link></li>);
  return data;
}

export const hashFilter = (data, id, color, handleLove) => {
  data = data.filter(singleData => (singleData.body.includes(` #${id}`) || singleData.body.startsWith(`#${id}`)));
  data = data.map(singleData => <SingleContent key={singleData.id} color={color} data={singleData} handleLove={handleLove} />);
  return data;
}

export const singleContent = (data, color) => {
  data = data.body.split(' ');
  data = data.map(oneData => oneData.charAt(0)==='#' ? <Link key={uuidv1()} to={`/hashtag/${removeHash(oneData)}`} style={{color}} className="hashtag"> {oneData} </Link> : <span key={uuidv1()}>{oneData + ' '}</span>);
  return data;
}

export const removeHash = (data) => {
  data = data.replace('#', '');
  return data;
}

export const autoScroll = () => {
  window.scrollTo(0, 0);
}
