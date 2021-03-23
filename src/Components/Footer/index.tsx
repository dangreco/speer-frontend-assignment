import React from 'react';
import Section from '../Section';

import { MdMail } from 'react-icons/md';


import './styles.css';


const Footer: React.FC = () => {

    return (
        <Section color="var(--color-purple)" padding={false} header={false} showTryNow={false} height=''>

            <div className="Footer">
                <div className="FooterLink">
                    <MdMail size={40} />
                    <a href="mailto:support@experienceconcerts.co">support@experienceconcerts.co</a>
                </div>

                <div className="Copytext">

                    <div className="Logo">EXP|CON</div>
                    <p className="Copyright">{ new Date().getFullYear() } © All Rights Reserved | Speer Technologies Incorporated</p>

                </div>

            </div>

        </Section>
    )

}

export default Footer;