import React, { Component } from 'react';
import personSvg from '../images/icon-person.svg'
import cosSvg from '../images/icon-cog.svg'
import chartSvg from '../images/icon-chart.svg'
import bgPatternHome3 from '../images/bg-pattern-home-3.svg'

export default class SkillDetailsSection extends Component {

    render() {
        return (
            <section className="Skill-details">
                <div className="skill-detayls-section">
                    <h2 className="header">
                        Build &amp; manage distributed teams like no one else.
        </h2>
                    <ul className="right-section">
                        <li>
                            <img src={personSvg} alt="" />
                            <div>
                                <h2>Experienced Individuals</h2>
                                <span>Our network is made up of highly experienced professionals who are passionate about what they do.</span>
                            </div>
                        </li>
                        <li>
                            <img src={cosSvg} alt="" />
                            <div>
                                <h2>Easy to Implement</h2>
                                <span>Our processes have been refined over years of implementation meaning our teams always deliver.</span>
                            </div>
                        </li>
                        <li>
                            <img src={chartSvg} alt="" />
                            <div>
                                <h2>Enhanced Productivity</h2>
                                <span>Our customized platform with in-built analytics helps you manage your distributed teams.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-wrapper">
                    <img className="bgPatternHome3" src={bgPatternHome3} />
                </div>
            </section>
        );
    }
}
