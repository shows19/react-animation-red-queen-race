import React, { useEffect, useContext } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from '../context/GlobalContext';

export const Foreground1 = () => {
    const {sceneryFrames, sceneryTimingForeground, otherPlaybackRate} = useContext(GlobalContext);
    
    const {ref, getAnimation} = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
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
        <div className="scenery" id="foreground1" ref={ref}>
            <img 
                id="palm3"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
                alt=" "
            />
        </div>
    )
}
