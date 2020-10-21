import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Speech from './components/Speech'
function App() {
  return (
    <>
      <Speech />
      <div className="App">
        <div className="main">
          <div className="options">
            <div>
              <label htmlFor="rate">Velocidade: </label>
              <input id="rate" type="range" min="1" max="10" step="1" value="1" />
              <span id="rate-text"></span>
            </div>
            <div>
              <label htmlFor="pitch">Entonação: </label>
              <input id="pitch" type="range" min="0" max="2" step="0.1" value="1" />
              <span id="pitch-text"></span>
            </div>
            <div>
              <label htmlFor="volume">Volume: </label>
              <input id="volume" type="range" min="0" max="1" step="0.01" value="1" />
              <span id="volume-text"></span>
            </div>
          </div>
          <div>
            <textarea name="speech" id="speech" cols={120} rows={40}></textarea>
            <span id="speech-size"></span>
          </div>
          <div> 
            <button id="speech-button">Speech</button>
            <button id="pause-button">Pause</button>
            <button id="resume-button">Resume</button>
          </div>
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
