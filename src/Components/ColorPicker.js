import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

export default class ColorPicker extends Component {
  state = {
    show: false
  }

  render() {
    const { show } = this.state;
    const { handleColorChange, color } = this.props;

    return (
      <div className="color-pick">
        <button className="colorpicker" style={{backgroundColor: color}} onClick={() => this.setState(show ? {show:false}:{show:true})}/>
        {show ? <TwitterPicker onChange={({hex}) => handleColorChange(hex)} /> : null}
      </div>
    )
  }
}
