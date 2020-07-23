import React, { useContext } from 'react'
import { WRookUpright } from './WRookUpright'
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from '../context/GlobalContext';

export const Foreground2 = () => {
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

    return (
        <div className="scenery" id="foreground2" ref={ref}>
            <img 
                id="bush"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
                alt=" "
            />
            <WRookUpright />
        </div>
    )
}
