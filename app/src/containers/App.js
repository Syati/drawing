import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Toolbar from '../components/Toolbar';
import Canvas from '../components/Canvas';
import ObjectDetailSidebar from '../components/ObjectDetailSidebar';
import fablicCanvas from '../js/fabricCanvas';

import * as objectHandlerActions from '../actions/objectHandlers';

const mapStateToProps = state => ({
  activeObject: state.activeObject,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(objectHandlerActions, dispatch),
});

class App extends React.Component {
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
    const { actions } = this.props;

    fablicCanvas.on('object:selected', actions.selectObject);
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
    return (
      <div>
        <Toolbar />
        <div className="container">
          <div className="row">
            <div ref="canvasWrapper" className={classNames('ten', 'columns')}>
              <Canvas
                width={500}
                height={500}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
