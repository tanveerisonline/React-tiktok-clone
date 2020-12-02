import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    //BEM Naming Convention
    <div className="app">

      <div className="app_videos">
        <Video />
      </div>

    </div>
  );
}

export default App;
