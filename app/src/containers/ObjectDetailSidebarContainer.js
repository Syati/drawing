import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ObjectDetailSidebar from '../components/ObjectDetailSidebar';
import * as objectActions from '../actions/fabricObject';

const ObjectDetailSidebarContainer = ({ activeObject, objectActions }) => (
  <ObjectDetailSidebar
    activeObject={activeObject}
    onChangePositionLeft={objectActions.setLeft}
    onChangePositionTop={objectActions.setTop}
    onChangeSizeWidth={objectActions.setWidth}
    onChangeSizeHeight={objectActions.setHeight}
  />
);

const mapStateToProps = (state) => (state.activeObject);

const mapDispatchToProps = (dispatch) => ({
  objectActions: bindActionCreators(objectActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ObjectDetailSidebarContainer);
