import React from 'react';
import { connect } from 'react-redux';

import Toolbar from '../components/Toolbar';
import { addObject } from '../actions/fablicCanvas';

const ToolbarContainer = ({ addObject }) => (
  <Toolbar onAddObject={addObject} />
);

ToolbarContainer.propTypes = {
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addObject })(ToolbarContainer);
