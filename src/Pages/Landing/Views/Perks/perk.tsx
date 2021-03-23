import React from 'react';

export type PerkProps = {
    title: string,
    description: string,
    color: string,
    width?: any,
    height?: any,
    monotone?: boolean
}

const Perk: React.FC<PerkProps> = ({
    title,
    description,
    color,
    width = '',
    height = '',
    monotone = false
}) => {

    return (

        <div 
            className="Perk"
            style={{
                width: width,
                height: height
            }}
        >
            
            <div 
                className="PerkLine"
                style={{
                    backgroundColor: monotone ? 'white' : color
                }}
            />

            <p className="PerkTitle"
                style={{
                    color: monotone ? 'white' : color
                }}
            >
                { title }
            </p>

            <p 
                className="PerkDescription"
                style={{
                    color: monotone ? 'black' : 'white'
                }}
            >
                { description }
            </p>

        </div>


    )

}

export default Perk;