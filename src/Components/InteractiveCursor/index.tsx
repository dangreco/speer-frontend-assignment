import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import useDimensions from 'react-cool-dimensions';

import './styles.css';

type Dim = {
    x: number;
    y: number;
    width: number;
    height: number;
}

type InteractiveCursorProps = {
    text: string;
    parentDim: Dim;
};


const InteractiveCursor: React.FC<InteractiveCursorProps> = ({ text, parentDim }) => {

    const [pos, setPos] = useState({x: 0, y: 0});
    const [visible, setVisible] = useState(false);

    const ref = useRef(null);

    const onMove = (e: MouseEvent) => {

        const {
            width,
            height,
            x,
            y
        } = parentDim;

        const { pageY, pageX } = e;
        
        if (pageY >= y && pageY <= y + height && pageX >= x && pageX <= x + width) {
            setVisible(true);
            setPos({
                x: pageX - x - 60,
                y: pageY - y - 60
            })
        } else {
            setVisible(false);
        }


    }


    useEffect(() => {

        document.addEventListener('mousemove', onMove);

        return () => document.removeEventListener('mousemove', onMove);

    }, [parentDim])

    useEffect(() => {
        if (!ref) return;

        // @ts-ignore
        ref.current.style.setProperty('--opacity', visible ? 1.0 : 0.0);

    }, [visible])

    return (
        <div 
            className="InteractiveCursor"
            style={{
                top: pos.y,
                left: pos.x,
            }}
            ref={ref}
        >
            <span>{ text }</span>
        </div>
    )

} 

export default InteractiveCursor;