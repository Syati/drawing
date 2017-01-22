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

  handleChangeFontFamily = (evt) => {
    this.props.onChangeFontFamily(evt.target.value);
  };

  handleChangeFontSize = (evt) => {
    this.props.onChangeFontSize(evt.target.value);
  };

  renderText() {
    const { fontFamily, fontSize } = this.props.activeObject;
    return (
      <div>Font
        <label>Typeface
          <select value={fontFamily} onChange={this.handleChangeFontFamily}>
            <option value="Times New Roman">Times New Roman</option>
            <option value="MS Gothic">ＭＳ Ｐゴシック</option>
            <option value="Meiryo">メイリオ</option>
            <option value="Yu Gothic">游ゴシック</option>
            <option value="Hiragino Kaku Gothic Pro">ヒラギノ角ゴ Pro</option>
            <option value="Hiragino Kaku Gothic Std">ヒラギノ角ゴ Std</option>
            <option value="Hiragino Mincho ProN">ヒラギノ明朝 ProN</option>
          </select>
        </label>
        <label>Size
          <input
            type="number"
            value={fontSize}
            onChange={this.handleChangeFontSize}
          />
        </label>
        {this.renderCommonParts()}
      </div>
    );
  }

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
    const { type } = this.props.activeObject;
    let sidebar = this.renderCommonParts();
    if (type === "i-text") {
      sidebar = this.renderText();
    }
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
  onChangeFontFamily: React.PropTypes.func,
  activeObject: React.PropTypes.object,
};



