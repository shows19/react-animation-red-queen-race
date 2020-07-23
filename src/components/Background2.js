import React, { useContext } from 'react'
import { RPawn } from './RPawn'
import { RKnight } from './RKnight'
import { Palm2 } from './Palm2'
import { GlobalContext } from '../context/GlobalContext'
import useWebAnimations from "@wellyshen/use-web-animations";

export const Background2 = () => {

    const {sceneryFrames, sceneryTimingBackground, otherPlaybackRate} = useContext(GlobalContext);

    const {ref, getAnimation} = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
        onUpdate: ({ animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
            setPlayback();
          },
    });

    const setPlayback= () =>{
        getAnimation().updatePlaybackRate(otherPlaybackRate);
    };

    return (
        <div className="scenery" id="background2" ref={ref}>
            <RPawn />
            <RKnight />
            <Palm2 />
        </div>
    )
}
