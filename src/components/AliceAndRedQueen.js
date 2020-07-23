import React, { useContext } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from '../context/GlobalContext';

export const AliceAndRedQueen = () => {
    const {alicePlaybackRate} = useContext(GlobalContext);

    const spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

    const { ref, getAnimation } = useWebAnimations({
        keyframes: spriteFrames,
        timing:{
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        },
        onUpdate: ({ animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
            //console.log("animate: ",animate, " animation: ", animation );
            setAliceSpeed();
          },
  
    });

    const setAliceSpeed = () => {
        getAnimation().updatePlaybackRate(alicePlaybackRate);
    };

    return (
        <div className="">
            <div id="red-queen_and_alice" className="alice_height">
                <img ref={ref}
                    id="red-queen_and_alice_sprite"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                    //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
                    alt="Alice and the Red Queen running to stay in place."
                />
            </div>
        </div>
    )
}
