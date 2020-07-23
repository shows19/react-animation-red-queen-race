import React, { useContext, useEffect } from 'react'
import { Sky } from './components/Sky'
import { Earth } from './components/Earth'
import { Foreground1 } from './components/Foreground1'
import { Foreground2 } from './components/Foreground2'
import { Background1 } from './components/Background1'
import { Background2 } from './components/Background2'
import { GlobalContext } from './context/GlobalContext'

export const Scene = () => {
    const {alicePlaybackRate, setAlicePlaybackRate, setOtherPlaybackRate} = useContext(GlobalContext);

    const handleClick = () => {
      setAlicePlaybackRate(alicePlaybackRate*1.1);
      //console.log("alicePlaybackRate: ", alicePlaybackRate);

    };
  
    const adjustBackgroundPlayback = ()=>{
        if(alicePlaybackRate < 0.8){
            setOtherPlaybackRate(alicePlaybackRate/2 * -1);
        }
        else if(alicePlaybackRate > 1.2){
            setOtherPlaybackRate(alicePlaybackRate/2);
        }
        else{
            setOtherPlaybackRate(0);
        }
    };

    useEffect(adjustBackgroundPlayback,[]);

    // make alice slowdown aftersome time
    const reversePlayback = () => {
  
        if (alicePlaybackRate > 0.4){
            setAlicePlaybackRate(alicePlaybackRate*0.8);
          //console.log("reversePlayback:.... ", alicePlaybackRate);
        }
        adjustBackgroundPlayback();
      };
    
      useEffect(() => {
        const interval = setInterval(()=>{
          reversePlayback();
        },2000);
   
        return () => clearInterval(interval);
      });
  

    return (
        <div onClick={handleClick}>
            <Sky />
            <Earth />
            <Foreground1 />
            <Foreground2 />
            <Background1 />
            <Background2 />
      </div>
      )
}
