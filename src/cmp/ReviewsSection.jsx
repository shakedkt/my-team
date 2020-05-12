import React, { Component } from 'react';
import avatarKady from '../images/avatar-kady.jpg'
import avatarAiysha from '../images/avatar-aiysha.jpg'
import avatarArthur from '../images/avatar-arthur.jpg'
import bgPatternHome4 from '../images/bg-pattern-home-4-about-3.svg'
import bgPatternHome5 from '../images/bg-pattern-home-5.svg'
export default class ReviewSection extends Component {

    render() {
        return (
            <section className="review-section-wrapper">
                <div>
                    <img className="bgPatternHome4" src={bgPatternHome4} />
                </div>
                <div className="review-Section">
                    <h1>Delivering real results for top companies. Some of our <span> success stories. </span></h1>
                    <div className="review-list">
                        <div className="review">
                            <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                            <div>
                                <h3 className="reviewer-name">Kady Baker</h3>
                                <h4 className="reviewer-title">Product Manager at Bookmark</h4>
                            </div>
                            <img src={avatarKady} alt="" />
                        </div>
                        <div className="review">
                            <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                            <div>
                                <h3 className="reviewer-name">Aiysha Reese</h3>
                                <h4 className="reviewer-title">Founder of Manage</h4>
                            </div>
                            <img src={avatarAiysha} alt="" />
                        </div>
                        <div className="review">
                            <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                            <div>
                                <h3 className="reviewer-name">Arthur Clarke</h3>
                                <h4 className="reviewer-title">Co-founder of MyPhysio</h4>
                            </div>
                            <img src={avatarArthur} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-wrapper">
                    <img className="bgPatternHome5" src={bgPatternHome5} />
                </div>
            </section>
        );
    }
}
