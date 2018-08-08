import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

import './App.css';
import data from './data/data';

class App extends Component {
  state = {
    color: '#0693e3',
    auth: false,
    data: data
  }

  componentDidMount() {
    // True for logged in version, false for not logged in version
    this.setState({auth: true});
  }

  handleColorChange = (color) => {
    this.setState({color});
  }

  handleSubmission = (id, name, post) => {
    let data  = this.state.data;
    post = {
      id,
      author: name,
      body: post
    }
    data = [post, ...data];
    this.setState({data});
  }

  handleLove = (post) => {
    let data = this.state.data;
    data = data.map(singleData => singleData === post ? (post.love ? {id: post.id, author: post.author, body: post.body, love: false}:{id: post.id, author: post.author, body: post.body, love: true}) : singleData);
    this.setState({data});
  }

  render() {
    const { color, auth, data } = this.state;
    const { handleColorChange, handleSubmission, handleLove } = this;

    return (
      <Router basename="/react-micro-blog">
        <div className="App">
          <Header color={color} auth={auth} handleColorChange={handleColorChange} />
          <Content color={color} auth={auth} data={data} handleSubmission={handleSubmission} handleLove={handleLove} />
          <Footer color={color} />
        </div>
      </Router>
    );
  }
}

export default App;
