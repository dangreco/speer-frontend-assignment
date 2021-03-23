import React, { useEffect, useRef, useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import ReactGlTransitionImage from 'react-gl-transition-image';

import { GLTransition } from './types';


type ImageTransitionProps = {
    transition: GLTransition;
    image: string;
    duration?: number; // In ms
}

const ImageTransition: React.FC<ImageTransitionProps> = ({
    transition,
    image,
    duration = 750
}) => {

    const ref = useRef();

    const [currentImage, setCurrentImage] = useState('');
    const [visible, setVisible] = useState(true);

    useEffect(() => {


        if (!currentImage) {
            setCurrentImage(image);
        } else {

            setVisible(false);
            setTimeout(() => {

                setCurrentImage(image);
                setVisible(true);

            }, duration * 1.5)
        }

    }, [image]);

    return (
        <>
            <Spring
                config={{
                    duration: duration,
                    precision: 0.00001,
                    easing: t => t*t
                }}
                to={{ progress: visible ? 1.0 : 0.0 }}
            >
                {
                    (props: { progress: number }) => (
                        <ReactGlTransitionImage
                            ref={ref}
                            src={currentImage}
                            progress={props.progress}
                            transition={transition}
                        />
                    )
                }
            
                
            </Spring>
        </>
    )

}

export default ImageTransition;