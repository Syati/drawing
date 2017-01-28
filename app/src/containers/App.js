import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Canvas from '../components/Canvas';
import Toolbar from './ToolbarContainer';
import ObjectDetailSidebar from './ObjectDetailSidebarContainer';

import * as objectHandlerActions from '../actions/objectHandler';
import * as fabricCanvasActions from '../actions/fabricCanvas';
import * as fontsActions from '../actions/fonts';

class App extends React.Component {
  componentDidMount() {
    const { fabricCanvas, objectHandlerActions, fontsActions } = this.props;
    fontsActions.initialize();
    fabricCanvas.on('object:selected', (evt) => objectHandlerActions.selected(evt.target));
    fabricCanvas.on('object:moving', (evt) => objectHandlerActions.moving(evt.target));
    fabricCanvas.on('object:modified', (evt) => objectHandlerActions.modified(evt.target));
    fabricCanvas.on('object:scaling', (evt) => objectHandlerActions.scaling(evt.target));
    fabricCanvas.on('selection:cleared', (evt) => objectHandlerActions.cleared());
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
  fontsActions: bindActionCreators(fontsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
