import React, { Component } from 'react';
import logoSvg from '../images/logo.svg'

import hamburger from '../images/icon-hamburger.svg'
import bottomPic from '../images/bg-pattern-home-2.svg'


export default class topSection extends Component {

  render() {
    return (
      <div className="top-section">
        <div className="nav-bar">
          <div className="left-side-navbar">
            <div className="logo">
              <img src={logoSvg} alt="" />
            </div>
            <a href="google.com">home</a>
            <a href="google.com">about</a>
          </div>
          <div className="right-side-navbar">
            <button>contact us</button>
            <img className="hamburger" src={hamburger} alt=""/>
          </div>
        </div>

        <div className="find-people">
          <div>Find the <br/> best<span> talent</span>
          </div>
          <p>
            Finding the right people and building high performing teams can be hard.
            Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>

        <img className="bg-pattern-home" src={bottomPic} alt=""/>
      </div>
    );
  }
}
