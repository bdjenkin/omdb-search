import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Blog from './Blog';
//import Movie from './Movie';
import Search from './Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Search: OMDb</h1>
        </header>

        <Search />

      </div>
      
    );
  }
}

export default App;
