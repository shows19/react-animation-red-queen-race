import React, { createContext, useReducer } from "react";

function globalContextReducer(state, action){
    const setOtherPlaybackRate = (alicePlaybackRate) => {
        if(alicePlaybackRate < 0.8){
            return (alicePlaybackRate/2 * -1);
        }
        else if(alicePlaybackRate > 1.2){
            return (alicePlaybackRate/2);
        }
        else{
            return (0);
        }
    };

    switch (action.type) {
        case 'ALICE_PLAYBACK':
          return {
            ...state,
            alicePlaybackRate: action.playbackRate,
            otherPlaybackRate: setOtherPlaybackRate(action.playbackRate)
          }
          default:
            return state;
        }          
}

export const GlobalContext = createContext();

const initialState = {
    alicePlaybackRate : 1,
    otherPlaybackRate : 0,
    sceneryFrames : [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' } 
    ],
    sceneryTimingBackground : {
        duration: 36000,
        iterations: Infinity
    },
    sceneryTimingForeground : {
        duration: 12000,
        iterations: Infinity
     }
  };
  
export const GlobalContextProvider = ( { children }) => {
    // create reducer
    const [state, dispatch] = useReducer(globalContextReducer,initialState);
    // set elements whose whose state needs to be managed
    const { alicePlaybackRate,otherPlaybackRate,sceneryFrames,sceneryTimingBackground,sceneryTimingForeground } = state;

    const setAlicePlaybackRate= (newPlaybackRate) => {
        dispatch({type:'ALICE_PLAYBACK' , playbackRate: newPlaybackRate})
    }

    return (
        <GlobalContext.Provider value={{ alicePlaybackRate, setAlicePlaybackRate, 
            sceneryFrames, sceneryTimingBackground, sceneryTimingForeground,
            otherPlaybackRate}}>
                {children}
        </GlobalContext.Provider>
    )
};


