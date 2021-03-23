import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

type ReviewProps = {
    stars: number,
    reviewer: string,
    review: string,
    width?: any,
    height?: any
}

const Review: React.FC<ReviewProps> = ({
    stars,
    reviewer,
    review,
    width = '',
    height = ''
}) => {

    /* Clamp value to [0...5] */
    const starsFilled = stars < 0 ? 0 : stars > 5 ? 5 : stars;
    const starsEmpty = 5 - starsFilled;

    return (

        <div
            className="Review"
            style={{
                width: width,
                height: height
            }}
        >

            <div
                className="ReviewStars"
            >

                {

                    [...Array(starsFilled)].map(
                        _ => (
                            <div className="Star">
                                <MdStar />
                            </div>
                        )
                    )

                }

                {

                    [...Array(starsEmpty)].map(
                        _ => (
                            <div className="Star">
                                <MdStarBorder />
                            </div>
                        )
                    )

                }

            </div>

            <p className="Reviewer"
            >
                {reviewer}
            </p>

            <p className="ReviewContent">
                "{review}"
            </p>

        </div>


    )

}

export default Review;