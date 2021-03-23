import React, { useEffect, useState } from 'react';
import { Surface } from "gl-react-dom";
import './styles.css';
import Gradients from './graphics';
import useDimensions from 'react-cool-dimensions';
import useAnimationFrame from '../../Hooks/useAnimationFrame';
import { Spring, Keyframes,} from 'react-spring/renderprops';

export enum LiquidButtonSize {
    Small,
    Large
}

const LiquidButtonSizeStyles = {

    [LiquidButtonSize.Small] : {
        height: 48,
        borderRadius: 24,
        padding: `0 24px`,
        fontSize: '18px'
    },

    [LiquidButtonSize.Large]: {
        height: 72,
        borderRadius: 36,
        padding: `0 60px`,
        fontSize: '24px'
    }

}

type LiquidButtonProps = {
    text: string,
    action(): any,
    size?: LiquidButtonSize
}


const LiquidButton: React.FC<LiquidButtonProps> = ({ 
    text, 
    action,
    size = LiquidButtonSize.Large 
}) => {

    const { ref, width, height } = useDimensions<HTMLDivElement>();

    const [shouldReset, setShouldReset] = useState(false); 
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        setShouldReset(true);
    }, [reverse])

    return (
        <button 
            onClick={action} 
            className="LiquidButton"
            style={{
                ...LiquidButtonSizeStyles[size]
            }}
        >
            <div className="LiquidContainer" ref={ref}>
            <Spring
                config={{
                    duration: 5000,
                    precision: 0.0001
                }}
                onRest={() => {setReverse(reverse => !reverse)}}
                onStart={() => setShouldReset(false)}
                from={{ time: 0.0 }}
                to={{ time: 1.0 }}
                reset={shouldReset}
                reverse={reverse}
            >
                    {
                       (props: {time: number}) => (
                        <>
                            <Surface width={width} height={height}>
                            <Gradients time={props.time} />
                        </Surface>
                        <p>{props.time}</p>
                        </>
                       )
                        
                    }
                    </Spring>
            </div>
            <span
                style={{
                    lineHeight: size === LiquidButtonSize.Large ? '72px' : '48px',
                    height: size === LiquidButtonSize.Large ? '72px' : '48px',
                    display: 'block'
                }}
            >
                {text}
            </span>

            <div className="Lighten" />
        </button>
    )

}

export default LiquidButton;