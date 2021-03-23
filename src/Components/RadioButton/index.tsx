import React from 'react';

import './styles.css';

type RadioButtonProps = {

    color?: any;
    text?: string;
    selected?: boolean;
    onSelect?: () => void;

}

const RadioButton: React.FC<RadioButtonProps> = ({
    color= 'var(--color-black)',
    text = '',
    selected = false,
    onSelect = () => {}
}) => {

    return (
        <button className="RadioButton" onClick={onSelect}>
            <div
                className="RadioCircle"
                style={{
                    backgroundColor: selected ? color : 'transparent',
                    borderColor: selected ? color : 'var(--color-black)'
                }}
            />
            <p 
                className="RadioText"
                style={{
                    color: color
                }}
            >
                { text }
            </p>
        </button>
    )

}

export default RadioButton;