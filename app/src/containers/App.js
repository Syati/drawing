import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Canvas from '../components/Canvas';
import Toolbar from './ToolbarContainer';
import ObjectDetailSidebar from './ObjectDetailSidebarContainer';

import * as objectHandlerActions from '../actions/objectHandler';
import * as fablicCanvasActions from '../actions/fablicCanvas';

class App extends React.Component {
  componentDidMount() {
    const { fablicCanvas, objectHandlerActions } = this.props;
    fablicCanvas.on('object:selected', objectHandlerActions.selected);
    fablicCanvas.on('object:moving', objectHandlerActions.moving);
    fablicCanvas.on('object:modified', objectHandlerActions.modified);
  }

  render() {
    const { fablicCanvasActions } = this.props;

    return (
      <div>
        <Toolbar />
        <div className="container">
          <div className="row">
            <div ref="canvasWrapper" className={classNames('ten', 'columns')}>
              <Canvas initialize={fablicCanvasActions.initialize} width={500} height={500} />
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
  fablicCanvas: state.fablicCanvas,
});

const mapDispatchToProps = (dispatch) => ({
  objectHandlerActions: bindActionCreators(objectHandlerActions, dispatch),
  fablicCanvasActions: bindActionCreators(fablicCanvasActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
