import React, { Component } from 'react';
import logoSvg from '../images/logo.svg'
import facebookSvg from '../images/icon-facebook.svg'
import twitterSvg from '../images/icon-twitter.svg'
import pinterestSvg from '../images/icon-pinterest.svg'

export default class FooterSection extends Component {

    render() {
        return (
            <div className="footer-section-wrapper">
                <div className="footer-section">
                    <div className="left-side">
                        <div className="logo">
                            <img src={logoSvg} alt="" /></div>
                        <div className="navigation">
                            <a href="">home</a>
                            <a href="">about</a>
                        </div>
                    </div>

                    <div className="adress">
                        <span>987  Hillcrest Lane</span>
                        <span>Irvine, CA</span>
                        <span>California 92714</span>
                        <span>Call Us : 949-833-7432</span>
                    </div>

                    <div className="right-side">
                        <div className="social-btns">
                            <a href="">
                                <img src={facebookSvg} alt="" />
                            </a>
                            <a href="http://">
                                <img src={pinterestSvg} alt="" />
                            </a>
                            <a href="http://">
                                <img src={twitterSvg} alt="" />
                            </a>
                        </div>
                        <span>Copyright 2020. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        );
    }
}
