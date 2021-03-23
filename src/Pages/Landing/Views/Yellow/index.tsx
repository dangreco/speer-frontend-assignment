import React from 'react';
import useDimensions from 'react-cool-dimensions';
import { InteractiveCursor, Section } from '../../../../Components';
import ImageReveal from '../../../../Components/ImageReveal';
import RoundedButton, { RoundedButtonSize } from '../../../../Components/RoundedButton';
import gambino from '../../../../Assets/Images/Yellow/gambino.png';

import './styles.css';

const Yellow: React.FC = () => {




    const { ref, entry } = useDimensions<HTMLDivElement>();

    // @ts-ignore
    const { offsetTop, offsetLeft, scrollHeight, scrollWidth } = entry ? entry.target.parentNode : { offsetTop: 0, offsetLeft: 0, scrollHeight: 0, scrollWidth: 0 };

    const layoutData = {
        width: scrollWidth,
        height: scrollHeight,
        x: offsetLeft,
        y: offsetTop
    }



    return (
        <Section color={'var(--color-yellow)'} showTryNow header padding hideCursor>

            <div className="ImageRevealContainer">
                <ImageReveal color={"#FFB33F"} url={gambino }/>
            </div>

            <div className="Yellow" ref={ref}>

                <div className="Forty">

                </div>

                <div className="Sixty">
                    <p className="LargeText">Front Row Seats</p>
                    <p className="SmallText" style={{color: 'white'}}>Experience concerts up close and personal.</p>
                    <RoundedButton text={"See Demo"} size={RoundedButtonSize.Large} />
                </div>



                <InteractiveCursor text={"Reveal"} parentDim={layoutData} />



            </div>

        </Section>
    )
}

export default Yellow;