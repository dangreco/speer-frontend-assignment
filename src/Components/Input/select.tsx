import React, { useState } from 'react';

import './styles.css';

export type Option = {
    [key: string]: string;
}

export type SelectInputProps = {
    title: string;
    options?: Option[];
    onSelect?: (key: string) => void;
    initial?: Option
}

const SelectInput: React.FC<SelectInputProps> = ({
    title,
    options = [],
    initial = undefined,
    onSelect = () => {}
}) => {

    const [ selected, setSelected ] = useState(initial);
    const [ focused, setFocused ] = useState(false);

    return (
        <>
            <label>{ title }</label>

            <div className="OutlineContainer">
                <select  
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                >

                </select>
                <div 
                    className="Outline" 
                />
            </div>

        </>
    )

}

export default SelectInput;