import React, { useContext, useEffect, useState } from 'react';
import { InteractiveCursor, Section } from '../../../../Components';

import './styles.css';

import {
    speakerR,
    speakerL
} from '../../../../Assets/Images/Red';
import useDimensions from 'react-cool-dimensions';
import LayoutContext from '../../../../Contexts/Layout';
import RoundedButton, { RoundedButtonSize } from '../../../../Components/RoundedButton';

const Red: React.FC = () => {

    const [audioContext, setAudioContext] = useState(new AudioContext());
    const [audioElement, setAudioElement] = useState(undefined);
    const [playing, setPlaying] = useState(false);




    const { ref, entry } = useDimensions<HTMLDivElement>();

    // @ts-ignore
    const { offsetTop, offsetLeft, scrollHeight, scrollWidth } = entry ? entry.target.parentNode : { offsetTop: 0, offsetLeft: 0, scrollHeight: 0, scrollWidth: 0 };

    const layoutData = {
        width: scrollWidth,
        height: scrollHeight,
        x: offsetLeft,
        y: offsetTop
    }


    const togglePlaying = () => setPlaying(!playing);

    useEffect(() => {


        if (!audioContext || !audioElement) return;

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }


        if (playing === true) {
            // @ts-ignore
            audioElement.play();
        } else if (playing === false) {
            // @ts-ignore
            audioElement.pause();
        }

    }, [playing])

    useEffect(() => {
        const audioElement = document.getElementById('music');

        if (!audioElement) return;

        // @ts-ignore
        const track = audioContext.createMediaElementSource(audioElement);
        track.connect(audioContext.destination);
        // @ts-ignore
        setAudioElement(audioElement);

    }, [])

    return (
        <Section color={'var(--color-red)'} showTryNow header padding={false} hideCursor hash="what">

            <div className="Red" ref={ref}>

                <div className="Sixty Content">
                    <p className="LargeText">Superior Sound</p>
                    <p className="SmallText">Experience live versions of your favorite songs.</p>
                    <RoundedButton text={"See Demo"} size={RoundedButtonSize.Large} />
                </div>


                <div className="Forty">
                    <div className="Speakers" onClick={togglePlaying}>

                        <div
                            className="Speaker"
                            style={{
                                backgroundImage: `url(${speakerL})`
                            }}
                        />

                        <div
                            className="Speaker"
                            style={{
                                backgroundImage: `url(${speakerR})`
                            }}
                        />


                    </div>
                </div>



                <InteractiveCursor text={"Click"} parentDim={layoutData} />

            </div>

            <audio src="/song.mp3" id="music"></audio>

        </Section>
    );

}

export default Red;