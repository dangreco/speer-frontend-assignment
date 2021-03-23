import React from 'react';
import { Section } from '../../../../Components';
import RoundedButton, { RoundedButtonSize } from '../../../../Components/RoundedButton';
import Perk from './perk';

import './styles.css';


const PERKS = [
    {
        title: 'Subscription payment model',
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--color-red)'
    },
    {
        title: 'No fee cancelation policy',
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--color-blue)'
    },
    {
        title: 'Subscription payment model',
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--color-yellow)'
    },
]

type PerksProps = {
    color?: any,
    monotone?: boolean
}

const Perks: React.FC<PerksProps> = ({ 
    color = 'var(--color-black)',
    monotone = false
 }) => {

    return (
        <Section color={color} header padding height='' hash="perks">
            <div className="PerksRoot">
                <p className="MegaText">Perks</p>

                <div className="Perks">

                    {
                        PERKS.map(
                            (val, indx) => (
                                <Perk
                                    monotone={monotone}
                                    title={val.title}
                                    description={val.description}
                                    color={val.color}
                                    width={`calc(100% / ${PERKS.length + 1})`}
                                />
                            )
                        )
                    }

                </div>
            </div>
        </Section>
    )
}

export default Perks;