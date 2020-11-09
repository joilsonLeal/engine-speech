import React, { FormEvent, useState } from 'react'
import { parse } from 'url';

import { Container } from './styles'

const Speech: React.FC = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [ rate, setRate ] = useState('8');
    const [ text, setText ] = useState('');

    const changeRate = (value: string) => {
        setRate(parseFloat(value).toFixed(0));
    }

    const startSpeech = () => {
        utterance.text = text;
        utterance.lang = 'pt-BR';
        utterance.rate = parseInt(rate);
        speechSynthesis.speak(utterance);
    }

    const pauseSpeech = () => {
        speechSynthesis.pause();
    }

    const resumeSpeech = () => {
        speechSynthesis.resume();
    }

    return (
        <>
            <div className="App">
                <div className="main">
                <div className="options">
                    <div>
                        <label htmlFor="rate">Velocidade: </label>
                        <input id="rate" type="range" min="1" max="10" step="1" defaultValue="8" onChange={e => changeRate(e.target.value)} />
                        <span id="rate-text">{rate}</span>
                    </div>
                </div>
                <div>
                    <textarea name="speech" id="speech" onChange={e => setText(e.target.value) } cols={120} rows={40}></textarea>
                    <span id="speech-size"></span>
                </div>
                <div> 
                    <button id="speech-button" onClick={startSpeech}>Speech</button>
                    <button id="pause-button" onClick={pauseSpeech}>Pause</button>
                    <button id="resume-button" onClick={resumeSpeech}>Resume</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Speech