import React from 'react';
import './App.css';
import { Scene } from './Scene';
import { GlobalContextProvider } from './context/GlobalContext';
function App() {

  return (
    <div>
      <GlobalContextProvider>
        <Scene />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
