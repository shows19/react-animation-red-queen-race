import React, { useEffect, useContext } from 'react'
import { RPawnUpright } from './RPawnUpright'
import { WRook } from './WRook'
import { Palm1 } from './Palm1'
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from '../context/GlobalContext';

export const Background1 = () => {

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

    const setCurrentTime = ()=> {
        getAnimation().currentTime = getAnimation().effect.getTiming().duration/2;
    };

    useEffect(setCurrentTime,[]);

    return (
        <div className="scenery" id="background1" ref={ref}>
            <RPawnUpright />
            <WRook />
            <Palm1 />
        </div>
    )
}
