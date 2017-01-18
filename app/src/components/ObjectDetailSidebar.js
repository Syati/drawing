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

  render() {
    const { activeObject } = this.props;
    const isActiveObject = !!activeObject;

    let positionLeft = isActiveObject ? activeObject.left : 0;
    let positionTop = isActiveObject ? activeObject.top : 0;
    let sizeWidth = isActiveObject ? activeObject.width : 0;
    let sizeHeight = isActiveObject ? activeObject.height : 0;

    return (
      <div id="ObjectDetailSideBar">
        <div>Position
          <label>X
            <input
              id="position_x"
              type="number"
              value={positionLeft}
              onChange={this.handleChangePositionLeft}
            />
          </label>
          <label>Y
            <input
              id="position_y"
              type="number"
              value={positionTop}
              onChange={this.handleChangePositionTop}
            />
          </label>
        </div>
        <div>Size
          <label>Width
            <input
              id="scale"
              type="number"
              value={sizeWidth}
              onChange={this.handleChangeSizeWidth}
            />
          </label>
          <label>Height
            <input
              id="scale"
              type="number"
              value={sizeHeight}
              onChange={this.handleChangeSizeHeight}
            />
          </label>
        </div>
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



