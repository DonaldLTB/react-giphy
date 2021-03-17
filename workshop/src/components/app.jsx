import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./SearchBar";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
        <SearchBar />
        </div>
        <Gif />
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}
