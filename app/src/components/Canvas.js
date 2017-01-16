import React from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.props.initialize({
      element: el,
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
  initialize: React.PropTypes.func,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};