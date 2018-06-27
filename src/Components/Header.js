import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

import ColorPicker from './ColorPicker';

import logo from '../logo.svg';

class Header extends PureComponent {
  render() {
    const {color, handleColorChange} = this.props;
    return (
      <header>
      <div className="navbar">
        <ul>
          <li><Link style={{color}} to="/">Home</Link></li>
          <li><img style={{backgroundColor: color}} alt="logo" src={logo} /></li>
          <li><ColorPicker color={color} handleColorChange={handleColorChange} /></li>
        </ul>
      </div>
    </header>
    );
  }
}

export default Header;

