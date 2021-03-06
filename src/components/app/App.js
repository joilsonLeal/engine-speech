import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Options, TextArea } from './styles';

const App = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [ pause, setPause ] = useState(false);
    const [ rate, setRate ] = useState('8');
    const [ text, setText ] = useState('');
    const [ voice, setVoice ] = useState('pt-BR');
    const letterSize = 16;
    let lineSize = 0;
    const voices = [
        {name: 'Microsoft Maria Desktop - Portuguese(Brazil)', lang: 'pt-BR'},
        {name: 'Microsoft Zira Desktop - English (United States)', lang: 'en-US'},
    ];

    const textarea = document.getElementById('textarea');

    const changeRate = (value) => {
        setRate(parseFloat(value).toFixed(0));
    }

    const startSpeech = () => {
        lineSize = 0;
        textarea.scrollTop = 0;
        utterance.text = text;
        utterance.lang = voice;
        utterance.rate = parseInt(rate);
        utterance.onboundary = onboundaryHandler;
        speechSynthesis.speak(utterance);
    }

    const pauseSpeech = () => {
        setPause(!pause);
        if(pause) speechSynthesis.pause() 
        else speechSynthesis.resume();
    }

    const stopSpeech = () => {
        speechSynthesis.cancel();
    }

    function onboundaryHandler(event){
        var value = text;
        var index = event.charIndex;
        var word = getWordAt(value, index);
        var anchorPosition = getWordStart(value, index);
        var activePosition = anchorPosition + word.length;
        
        textarea.focus();
    
        if (textarea.setSelectionRange) {
            textarea.setSelectionRange(anchorPosition, activePosition);
            
            if(scrollDown(word.length+1)) {
                textarea.scrollTop += letterSize;
            }
        }
        else {
            let range = textarea.createTextRange();
            range.collapse(true);
            range.moveEnd('character', activePosition);
            range.moveStart('character', anchorPosition);
            range.select();
        }
    };

    function scrollDown(wordSize) {
        const colLength = 157;
        lineSize += wordSize;
        if(lineSize < colLength) 
            return false;
        
        lineSize -= colLength;
        return true;
    }

    function getWordAt(str, pos) {
        str = String(str);
        pos = Number(pos) >>> 0;

        var left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);

        if (right < 0) {
            return str.slice(left);
        }
        
        return str.slice(left, right + pos);
    }

    function getWordStart(str, pos) {
        str = String(str);
        pos = Number(pos) >>> 0;

        var start = str.slice(0, pos + 1).search(/\S+$/);
        return start;
    }

    return (
        <>
            <Container>
                <Options>
                    <label htmlFor="rate">Velocidade: </label>
                    <input id="rate" type="range" min="1" max="10" step="1" defaultValue="8" onChange={e => changeRate(e.target.value)} />
                    <span id="rate-text">{rate}</span>
                </Options>
                <select id="select-voice" onChange={(e) => setVoice(e.target.value)}>
                {
                    voices.map(voice => {
                        return  (
                            <option key={voice.lang} value={voice.lang}>
                                {voice.name}
                            </option>
                        )
                    })
                }
                </select>
            </Container>
            <Container>
                <TextArea id="textarea" onChange={e => setText(e.target.value) } cols={120} rows={40} ></TextArea>
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

export default App