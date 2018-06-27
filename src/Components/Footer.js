import React, {PureComponent} from 'react';

class Footer extends PureComponent {
  render() {
    const {color} = this.props;
    return (
      <footer>
      <ul>
        <li>React</li>
        <li>Love</li>
        <li>By <a rel="noopener noreferrer" style={{backgroundColor: color}} href="https://www.zonayed.me" target="_blank" >Zonayed Ahmed</a></li>
      </ul>
    </footer>
    );
  }
}

export default Footer;

