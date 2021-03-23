import React from 'react';
import ImageSlider from '../../../../Components/ImageSlider';
import * as HeroImagesExports from '../../../../Assets/Images/Hero';

import './styles.css';
import { Section } from '../../../../Components';
import { Link, useHistory } from 'react-router-dom';
import LiquidButton from '../../../../Components/LiquidButton';


const HERO_IMAGES: string[] = Object.values(HeroImagesExports);

const Hero: React.FC = () => {

    const history = useHistory();

    return (
        <Section showTryNow={false} color={"var(--color-black)"} header padding={false}>
            <div className="Hero">


                <ImageSlider images={HERO_IMAGES} darken />



                <div className="HeroContent">
                    <span>Interactive Concert Experience</span>
                    <p>
                        Experience your favorite artists like never before and from the
                        comfort of your own home.
                    </p>

                    <LiquidButton text={"Try it Now"} action={() => history.push("/pricing")}/>
                    
                </div>

            </div>
        </Section>
    );

}

export default Hero;