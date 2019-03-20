import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;
