import React from 'react';
import { Section } from '../../../../Components';
import Model from './model';


import './styles.css';


const MODELS = [
    {
        tier: "basic",
        period: 'monthly',
        cost: 9,
        features: [
            'Very good',
            'Amazing',
            'Perfect job',
            'Love this',
            'It\'s so good',
            'Features'
        ],
        color: 'var(--color-red)'
    },
    {
        tier: "advanced",
        period: 'yearly',
        cost: 99,
        features: [
            'Very very good',
            'Even amazing',
            'Perfect job',
            'Love this more',
            'It\'s so so good',
            'More features'
        ],
        color: 'var(--color-yellow)'
    },
    {
        tier: "pro",
        period: 'yearly',
        cost: 120,
        features: [
            'Very very good',
            'Even more',
            'Perfect job',
            'Love this more',
            'It\'s so so good',
            'More features'
        ],
        color: 'var(--color-blue)'
    }
]


const Models: React.FC = () => {

    return (
        <Section header height=''>

            <div className="ModelsContainer">

                <p className="MegaText">Pricing</p>
                <p
                    className="LargeText"
                    style={{
                        fontWeight: 'normal',
                        textTransform: 'none',
                        fontSize: 42,
                        lineHeight: 1.5,
                        letterSpacing: 3
                    }}
                >
                    Test out our app today! Choose from three subscription Based payment models.
                </p>


                <div className="Models">

                    {
                        MODELS.map(
                            model => (
                                <Model
                                    tier={model.tier}
                                    period={model.period}
                                    cost={model.cost}
                                    features={model.features}
                                    color={model.color}
                                    width={`calc(100% / ${MODELS.length + 1})`}
                                />

                            )
                        )
                    }

                </div>


            </div>

        </Section>
    )

}

export default Models;