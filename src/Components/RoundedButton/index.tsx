import React, { MouseEventHandler, useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionContext from '../../Contexts/Section';
import { hideCurrentCursor, showCurrentCursor } from '../InteractiveCursor/utils';

import './styles.css';

enum RoundedButtonSize {
    Small,
    Large,
}

const SizeStyles = {
    [RoundedButtonSize.Small]: {
        fontSize: 16,
        height: 60,
        padding: `0 60px`,
        borderRadius: 30,
    },
    [RoundedButtonSize.Large]: {
        fontSize: 24,
        height: 80,
        padding: `0 80px`,
        borderRadius: 40,
    }
}

type RoundedButtonProps = {
    text: string,
    size?: RoundedButtonSize,
    backroundColor?: any,
    textColor?: any,
    action?: () => void 
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
    text,
    action = () => {},
    textColor,
    backroundColor = 'white',
    size = RoundedButtonSize.Small
}) => {

    const onMouseMove: MouseEventHandler<HTMLButtonElement> = e => {

        if (!e || !e.target) return;

        // @ts-ignore
        var x = e.pageX - e.target.offsetLeft;
        // @ts-ignore
        var y = e.pageY - e.target.offsetTop;


        // @ts-ignore
        e.target.style.setProperty('--x', x + 'px');
        // @ts-ignore
        e.target.style.setProperty('--y', 50 + 'px');
    }

    const onMouseEnter: MouseEventHandler<HTMLButtonElement> = e => hideCurrentCursor();

    const onMouseLeave: MouseEventHandler<HTMLButtonElement> = e => showCurrentCursor();

    const { 
        color
    } = useContext(SectionContext);


    return (
        <button 
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={action}
            className="RoundedButton"
            style={{
                ...SizeStyles[size],
                backgroundColor: backroundColor,
                color: textColor || color
            }}
        >
            <span>{ text }</span>
        </button>
    )

}

export {
    RoundedButtonSize
}

export default RoundedButton;