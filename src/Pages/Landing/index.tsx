import React from 'react';
import Page from '../../Components/Page';

import './styles.css';

import {
    Hero,
    Red,
    Yellow,
    Perks,
    Reviews,
    GetNow
} from './Views';


const Landing: React.FC = () => {

    return (
        <Page>
            <div className="Landing">
                <Hero />
                <Red />
                <Yellow />
                <Perks />
                <Reviews />
                <GetNow />
            </div>
        </Page>
    );

}

export default Landing;