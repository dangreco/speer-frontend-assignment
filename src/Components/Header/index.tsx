import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import RoundedButton from '../RoundedButton';
import SectionContext from '../../Contexts/Section';

type HeaderProps = {
    showTryNow?: boolean
}

const Header: React.FC<HeaderProps> = ({ 
    showTryNow = true
 }) => {

    let history = useHistory();

    const onClick = () => history.push("/pricing");

    const {
        color
    } = useContext(SectionContext);

    const textColor = color === 'white' ? 'var(--color-black)' : "white";

    return (
        <div 
            className="Header"
            style={{
                color: textColor
            }}
        >

            <div className="LeftSide">

                <span className="Logo">EXP|CON</span>
            </div>

            {
                showTryNow ? (
                    <RoundedButton text="Try it Now" action={onClick}>

                    </RoundedButton>
                ) : null
            }

        </div>
    )

}

export default Header;