import React, { useEffect, useState } from 'react';
import { GLTransition } from './types';
import './styles.css';
import ImageTransition from './graphics';
import customTransition from './transition';


type ImageSliderProps = {
    images: string[];
    darken?: boolean;
    transition?: GLTransition;
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images, darken, transition=customTransition }) => {

    const [activeImage, setActiveImage] = useState(0);
    const [activeInterval, setActiveInterval] = useState(-1);

    const nextImage = (currentImage: number) => currentImage === images.length - 1 ? 0 : currentImage + 1

    const setNextImage = () => {
        setActiveImage(activeImage => nextImage(activeImage));
    }

    const restartInterval = () => {

        /* Replace Active Interval */
        if (activeInterval > 0) clearInterval(activeInterval);
        const intervalId = setInterval(setNextImage, 10 * 1000);

        // @ts-ignore
        setActiveInterval(intervalId);

    }

    const onClick = (index: number) => {
        restartInterval();
        setActiveImage(index);
    }

    useEffect(() => {

        restartInterval();

        return () => clearInterval(activeInterval);

    }, [])
    

    return (
        // @ts-ignore
        <div className="ImageSlider">
            

            <ImageTransition 
                transition={transition}
                image={images[activeImage]}
            />


            {
                darken ? (
                    <div className="Darken" />
                ) : null
            }


            <div className="ImageSliderButtonContainer">
                {
                    /* Renders as many buttons as there are images */
                    images.map(
                        (_, index) => (
                            <button
                                key={images[index]}
                                style={{
                                    backgroundColor: activeImage === index ? 'white' : ''
                                }}
                                className="ImageSliderButton"
                                onClick={() => onClick(index)}
                            />
                        )
                    )
                }
            </div>

        </div>
    );

}

export default ImageSlider;