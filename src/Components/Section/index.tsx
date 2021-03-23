import React, { useState } from 'react';
import SectionContext from '../../Contexts/Section';
import HambugerMenu from '../HamburgerMenu';
import Header from '../Header';
import { MdMenu } from 'react-icons/md';

import './styles.css';
import { hideCurrentCursor, showCurrentCursor } from '../InteractiveCursor/utils';

type SectionProps = {
    padding?: boolean;
    header?: boolean;
    color?: string;
    showTryNow?: boolean;
    height?: any;
    hideCursor?: boolean;
    hash?: any;
}


const Section: React.FC<SectionProps> = ({
    padding = true,
    header = false,
    children,
    color = 'var(--color-black)',
    showTryNow = false,
    height = '95vh',
    hideCursor = false,
    hash = null
}) => {

    const [menuShown, setMenuShown] = useState(false);

    const textColor = color === 'white' ? 'var(--color-black)' : "white";
    const menuButtonColor = menuShown ? (
        color === 'var(--color-black)' ? 'white' : color
    ) : textColor;

    return (
        <SectionContext.Provider value={{ color: color }}>

            <div
                className="Section"
                id={hash}
                style={{
                    backgroundColor: color,
                    padding: padding ? height === '' ? '316px 128px 256px 128px' : '188px 128px 128px 128px' : 0,
                    height: height,
                    color: textColor,
                    cursor: hideCursor ? 'none' : ''
                }}
            >

                {children}

                {
                    header ? <Header showTryNow={showTryNow} /> : null
                }



                <HambugerMenu visible={menuShown} closeMenu={() => setMenuShown(false)} />

                {
                    header ? (
                        <button
                            className="MenuButton"
                            onClick={() => setMenuShown(menuShown => !menuShown)}
                            onMouseEnter={e => hideCurrentCursor()}
                            onMouseLeave={e => showCurrentCursor()}
                        >
                            <MdMenu size={60} color={menuButtonColor} />
                        </button>
                    ) : null
                }



            </div>
        </SectionContext.Provider>
    )

}


export default Section