import React, { MouseEventHandler, useContext } from 'react';
import SectionContext from '../../Contexts/Section';
import { NavHashLink } from 'react-router-hash-link';
import { hideCurrentCursor, showCurrentCursor } from '../InteractiveCursor/utils';

import './styles.css';

type HambugerMenuProps = {
    visible?: boolean,
    closeMenu?: () => void
}


const MENUITEMS = [
    {
        title: "what is it",
        to: '/#what'
    },
    {
        title: "perks",
        to: '/#perks'
    },
    {
        title: "pricing",
        to: '/pricing'
    }
]


const HambugerMenu: React.FC<HambugerMenuProps> = ({
    visible = false,
    closeMenu = () => {}
}) => {

    const {
        color
    } = useContext(SectionContext);

    const backgroundColor = color === 'var(--color-black)' ?  'var(--color-blue)' :  'var(--color-black)' 

    return (
        <div 
            className="HamburgerMenu"
            onMouseEnter={e => hideCurrentCursor()}
            onMouseLeave={e => showCurrentCursor()}
            style={{
                top: visible ? '-15vw' : 94,
                left: visible ? '-15vw' : 94,
                width: visible ? '40vw' : 0,
                height: visible ? '40vw' : 0,
                paddingTop: visible ? '15vw' : 0,
                paddingLeft: visible? '15vw' : 0,
                backgroundColor: backgroundColor
            }}
        >   

            <div className="MenuInternal">
                
                {
                    MENUITEMS.map(
                        item => (
                            <NavHashLink
                                scroll={
                                    el => {
                                        closeMenu();
                                        el.scrollIntoView({behavior: 'smooth'})
                                    }
                                }
                                to={item.to}
                                activeStyle={{ color: color }}
                            >
                                { item.title }
                            </NavHashLink>
                        )
                    )
                }

            </div>

        </div>
    )

}

export default HambugerMenu