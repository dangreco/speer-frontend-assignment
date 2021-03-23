import React from 'react';
import { Section } from '../../Components';
import Page from '../../Components/Page';
import { Perks } from '../Landing/Views';
import { Models } from './Views';

const Pricing: React.FC = () => {

    return (
        <Page>

            <Models />
            <Perks monotone color={'var(--color-red)'}/>

        </Page>
    );

}

export default Pricing;