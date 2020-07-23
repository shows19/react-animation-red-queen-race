import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ( { children }) => {
    const [alicePlaybackRate, setAlicePlaybackRate] = useState(1);
    const [otherPlaybackRate, setOtherPlaybackRate] = useState(0);

    /* Background animations */
    const sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
    ];
    
    const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };
    
    const sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
     };

    return (
        <GlobalContext.Provider value={{ alicePlaybackRate, setAlicePlaybackRate, 
            sceneryFrames, sceneryTimingBackground, sceneryTimingForeground,
            otherPlaybackRate, setOtherPlaybackRate}}>
                {children}
        </GlobalContext.Provider>
    )
};


