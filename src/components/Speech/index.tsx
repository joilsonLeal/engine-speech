import React, { FormEvent, useState } from 'react'
import { parse } from 'url';

import { Container } from './styles'

const Speech: React.FC = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [ volume, setVolume ] = useState('100');
    const [ pitch, setPitch ] = useState('1');
    const [ rate, setRate ] = useState('1');
    const [ text, setText ] = useState('');

    const changeVolume = (value: string) => {
        setVolume((parseFloat(value) * 100).toFixed(0));
    }

    const changePitch = (value: string) => {
        setPitch(parseFloat(value).toFixed(1));
    }

    const changeRate = (value: string) => {
        setRate(parseFloat(value).toFixed(0));
    }



    const startSpeech = () => {
        utterance.text = text;
        utterance.lang = 'pt-BR';
        utterance.rate = parseInt(rate);
        utterance.pitch = parseFloat(pitch);
        utterance.volume = parseFloat(volume);
        speechSynthesis.speak(utterance);
    }

    return (
        <>
            <div className="App">
                <div className="main">
                <div className="options">
                    <div>
                        <label htmlFor="rate">Velocidade: </label>
                        <input id="rate" type="range" min="1" max="10" step="1" defaultValue="1" onChange={e => changeRate(e.target.value)} />
                        <span id="rate-text">{rate}</span>
                    </div>
                    <div>
                        <label htmlFor="pitch">Entonação: </label>
                        <input id="pitch" type="range" min="0" max="2" step="0.1" defaultValue="1" onChange={e => changePitch(e.target.value)} />
                        <span id="pitch-text">{pitch}</span>
                    </div>
                    <div>
                        <label htmlFor="volume">Volume: </label>
                        <input id="volume" type="range" min="0" max="1" step="0.01" defaultValue="1" onChange={e => changeVolume(e.target.value)} />
                        <span id="volume-text">{volume}</span>
                    </div>
                </div>
                <div>
                    <textarea name="speech" id="speech" onChange={e => setText(e.target.value) } cols={120} rows={40}></textarea>
                    <span id="speech-size"></span>
                </div>
                <div> 
                    <button id="speech-button" onClick={startSpeech}>Speech</button>
                    <button id="pause-button">Pause</button>
                    <button id="resume-button">Resume</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Speech