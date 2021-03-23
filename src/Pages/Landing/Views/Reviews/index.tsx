import React from 'react';
import { Section } from '../../../../Components';
import RoundedButton, { RoundedButtonSize } from '../../../../Components/RoundedButton';
import Review from './review';

import speaker1 from '../../../../Assets/Images/Reviews/speaker1.png';
import speaker2 from '../../../../Assets/Images/Reviews/speaker2.png';

import './styles.css';


const REVIEWS = [
    {
        stars: 5,
        reviewer: "Artist",
        review: "Love it, it's the best. I can't live without it!"
    },
    {
        stars: 3,
        reviewer: "Producer",
        review: "Love it, it's the best. I can't live without it!"
    },
    {
        stars: 4,
        reviewer: "Music Fan",
        review: "Love it, it's the best. I can't live without it!"
    }
]


const Reviews: React.FC = () => {

    return (
        <Section color={'var(--color-blue)'} showTryNow header padding height=''>

            <div className="Thirty">

                <div 
                    className="Speaker"
                    style={{
                        backgroundImage: `url("${speaker1}")`
                    }}
                />

                <div className="Speaker" 
                    style={{
                        backgroundImage: `url("${speaker2}")`
                    }}
                />

            </div>

            <div className="Seventy">
                <p className="MegaText">Reviews</p>
                <div className="Reviews">
                    {
                        REVIEWS.map(
                            review => (
                                <Review
                                    stars={review.stars}
                                    reviewer={review.reviewer}
                                    review={review.review}
                                    width={`calc(100% / ${REVIEWS.length + 1})`}
                                />
                            )
                        )
                    }
                </div>
            </div>

        </Section>
    )
}

export default Reviews;