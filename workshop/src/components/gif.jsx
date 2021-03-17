import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class gif extends Component {
  render() {
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifID}/giphy.gif`
    return (
      <img src={url} alt="" className="gif" />
    );
  }
}
