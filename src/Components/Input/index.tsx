import React from 'react';
import SelectInput from './select';
import TextInput from './text';

export enum InputType {
    Text,
    Select
}

type InputProps = {
    type: InputType,
    title: string,
    hidden?: boolean,
}

const Input: React.FC<InputProps> = ({
    type,
    title,
    hidden
}) => {


    const getInputFromType = () => {
        switch (type) {
            case InputType.Text:
                return <TextInput title={title} hidden={hidden}/>
            case InputType.Select:
                return <SelectInput title={title} />
        }
    }


    return (
        <div className="Input">
            {
                getInputFromType()
            }
        </div>
    )


}

export default Input;