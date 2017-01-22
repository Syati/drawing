import React from 'react';

// import { SketchPicker } from 'react-color';

export default class ObjectDetailSidebar extends React.Component {
  handleChangePositionLeft = (evt) => {
    this.props.onChangePositionLeft(evt.target.value);
  };

  handleChangePositionTop = (evt) => {
    this.props.onChangePositionTop(evt.target.value);
  };

  handleChangeSizeWidth = (evt) => {
    this.props.onChangeSizeWidth(evt.target.value);
  };
  handleChangeSizeHeight = (evt) => {
    this.props.onChangeSizeHeight(evt.target.value);
  };



    return (
      <div id="ObjectDetailSideBar">

  renderCommonParts() {
    const { left, top, width, height } = this.props.activeObject;
    return (
      <div>
        <div>Position
          <label>X
            <input
              id="position_x"
              type="number"
              value={left}
              onChange={this.handleChangePositionLeft}
            />
          </label>
          <label>Y
            <input
              id="position_y"
              type="number"
              value={top}
              onChange={this.handleChangePositionTop}
            />
          </label>
        </div>
        <div>Size
          <label>Width
            <input
              id="scale"
              type="number"
              value={width}
              onChange={this.handleChangeSizeWidth}
            />
          </label>
          <label>Height
            <input
              id="scale"
              type="number"
              value={height}
              onChange={this.handleChangeSizeHeight}
            />
          </label>
        </div>
      </div>
    );
  }

  render() {
    let sidebar = this.renderCommonParts();
    return (
      <div id="ObjectDetailSideBar">
        {sidebar}
      </div>
    );
  }
}

ObjectDetailSidebar.propTypes = {
  onChangePositionLeft: React.PropTypes.func,
  onChangePositionTop: React.PropTypes.func,
  onChangeSizeWidth: React.PropTypes.func,
  onChangeSizeHeight: React.PropTypes.func,
  activeObject: React.PropTypes.object,
};



