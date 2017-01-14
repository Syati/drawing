import React from 'react';
import ReactDOM from 'react-dom';

import fabricCanvas from '../js/fabricCanvas';

export default class Canvas extends React.Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    fabricCanvas.initialize(el, {
      height: this.props.height,
      width: this.props.width,
    });
  }


  render() {
    return (
      <canvas id="mainCanvas" />
    );
  }
}


Canvas.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};