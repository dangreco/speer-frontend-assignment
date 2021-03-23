import React, { useState } from 'react';

import './styles.css';

type TextInputProps = {
    title: string;
    hidden?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
    title,
    hidden = false
}) => {

    const [ focused, setFocused ] = useState(false);

    return (
        <>
            <label>{ title }</label>

            <div className="OutlineContainer">
                <input 
                    type={hidden ? 'hidden' : 'text'} 
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                >

                </input>
                <div 
                    className="Outline" 
                    style={{
                        backgroundColor: focused ? 'var(--color-dark-blue)' : 'transparent'
                    }}
                />
            </div>

        </>
    )

}

export default TextInput;