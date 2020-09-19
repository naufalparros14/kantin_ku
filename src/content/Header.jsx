import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper header mx-5 p-3 rounded d-flex">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pentagram4.svg/220px-Pentagram4.svg.png" width="100" className="mr-4" />
        <div className="content">
          <h3 className="title">Promo...</h3>
          <p className="subtitle">Perut kenyang, Perut kenyang </p>
        </div>
      </div>
    )
  }
}

export default Header;