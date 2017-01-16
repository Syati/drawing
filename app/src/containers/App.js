import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Canvas from '../components/Canvas';
import Toolbar from './ToolbarContainer';
import ObjectDetailSidebar from './ObjectDetailSidebarContainer';

import * as objectHandlerActions from '../actions/objectHandler';
import * as fabricCanvasActions from '../actions/fabricCanvas';

class App extends React.Component {
  componentDidMount() {
    const { fabricCanvas, objectHandlerActions } = this.props;
    fabricCanvas.on('object:selected', objectHandlerActions.selected);
    fabricCanvas.on('object:moving', objectHandlerActions.moving);
    fabricCanvas.on('object:modified', objectHandlerActions.modified);
  }

  render() {
    const { fabricCanvasActions } = this.props;

    return (
      <div>
        <Toolbar />
        <div className="container">
          <div className="row">
            <div ref="canvasWrapper" className={classNames('ten', 'columns')}>
              <Canvas initialize={fabricCanvasActions.initialize} width={500} height={500} />
            </div>
            <div className={classNames('two', 'columns')} >
              <ObjectDetailSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  fabricCanvas: state.fabricCanvas,
});

const mapDispatchToProps = (dispatch) => ({
  objectHandlerActions: bindActionCreators(objectHandlerActions, dispatch),
  fabricCanvasActions: bindActionCreators(fabricCanvasActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
