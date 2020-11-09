import React, { FormEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Options } from './styles';

const Speech: React.FC = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [ pause, setPause ] = useState(false);
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
        setPause(!pause);
        pause ? speechSynthesis.pause() : speechSynthesis.resume();
    }

    const stopSpeech = () => {
        speechSynthesis.cancel();
    }

    return (
        <>
            <Container>
                <Options>
                    <label htmlFor="rate">Velocidade: </label>
                    <input id="rate" type="range" min="1" max="10" step="1" defaultValue="8" onChange={e => changeRate(e.target.value)} />
                    <span id="rate-text">{rate}</span>
                </Options>
            </Container>
            <Container>
                <textarea name="speech" id="speech" onChange={e => setText(e.target.value) } cols={120} rows={40}></textarea>
                <span id="speech-size"></span>
            </Container>
            <Container> 
                <Button onClick={startSpeech}>
                    <FontAwesomeIcon icon={faPlay} />
                </Button>
                <Button onClick={pauseSpeech}>
                    <FontAwesomeIcon icon={faPlay} />
                    <FontAwesomeIcon icon={faPause} />
                </Button>
                <Button onClick={stopSpeech}>
                    <FontAwesomeIcon icon={faStop} />
                </Button>
            </Container>
        </>
    )
}

export default Speech