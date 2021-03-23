import React from 'react';
import { useHistory } from 'react-router';
import { LiquidButton, Section } from '../../../../Components';
import RoundedButton, { RoundedButtonSize } from '../../../../Components/RoundedButton';

import './styles.css';

const GetNow: React.FC = () => {

    const history = useHistory();

    return (
        <Section color={'var(--color-black)'} showTryNow={false} header padding height=''>

            <div className="Seventy">
                <p
                    className="MegaText"
                    style={{
                        color: 'var(--color-red)'
                    }}
                >
                    Get EXP|Con Now
                </p>
                <p
                    className="LargeText"
                    style={{
                        textTransform: 'none',
                        fontWeight: 'normal',
                        letterSpacing: 3
                    }}
                >
                    Purchase and download the app.
                </p>
            </div>

            <div className="Thirty">

                <LiquidButton text={"Try it Now"} action={() => history.push("/pricing")} />
            </div>

        </Section>
    )
}

export default GetNow;