require('../style/style.less');

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import fablicCanvas from './fabricCanvas';
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import ObjectDetailSidebar from './ObjectDetailSidebar';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: {
        width: 500,
        height: 500,
      },
      activeObject: null,
    };
  }

  componentDidMount() {
    fablicCanvas.on('object:selected', this.handleObjectEvent);
    fablicCanvas.on('object:moving', this.handleObjectEvent);
    fablicCanvas.on('object:modified', this.handleObjectEvent);
  }

  handleObjectEvent = (evt) => {
    this.setState({ activeObject: evt.target });
  };

  refreshActiveObject = () => {
    this.setState({ activeObject: this.state.activeObject });
    fablicCanvas.renderAll();
  };

  handleChangePositionLeft = (value) => {
    this.state.activeObject.setLeft(parseInt(value, 10)).setCoords();
    this.refreshActiveObject();
  };

  handleChangePositionTop = (value) => {
    this.state.activeObject.setTop(parseInt(value, 10)).setCoords();
    this.refreshActiveObject();
  };

  handleChangeSizeWidth = (value) => {
    this.state.activeObject.setScaleX(parseFloat(value)).setCoords();
    this.refreshActiveObject();
  };

  handleChangeSizeHeight = (value) => {
    this.state.activeObject.setScaleY(parseFloat(value)).setCoords();
    this.refreshActiveObject();
  };


  render() {
    const { width, height } = this.state.canvas;

    return (
      <div>
        <Toolbar />
        <div className="container">
          <div className="row">
            <div ref="canvasWrapper" className={classNames('ten', 'columns')}>
              <Canvas
                width={width}
                height={height}
              />
            </div>
            <div className={classNames('two', 'columns')} >
              <ObjectDetailSidebar
                activeObject={this.state.activeObject}
                onChangePositionLeft={this.handleChangePositionLeft}
                onChangePositionTop={this.handleChangePositionTop}
                onChangeSizeWidth={this.handleChangeSizeWidth}
                onChangeSizeHeight={this.handleChangeSizeHeight}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
