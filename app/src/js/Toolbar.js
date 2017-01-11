import React from 'react';

import { fabric } from 'fabric';
import fabricCanvas from './fabricCanvas';

export default class Toolbar extends React.Component {
  handleSquareClick() {
    const rect = new fabric.Rect({
      top: 10,
      left: 10,
      width: 10,
      height: 10,
      fill: 'red',
    });
    fabricCanvas.add(rect);
  }

  handleTextClick() {
    const iText = new fabric.IText('');
    fabricCanvas.add(iText);
    fabricCanvas.setActiveObject(iText);
    iText.enterEditing();
  }

  handleImageFileChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (event) => {
      let image = event.target.result;
      fabric.Image.fromURL(image, (img) => {
        fabricCanvas.add(img).renderAll();
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div id="toolBar">
        <button onClick={this.handleSquareClick}>Squ</button>
        <button onClick={this.handleTextClick}>Text</button>
        <label htmlFor="imageFile" className="button">
          Image
          <input
            id="imageFile"
            type="file"
            onChange={this.handleImageFileChange}
            className="display-none"
          />
        </label>
      </div>
    );
  }
}

