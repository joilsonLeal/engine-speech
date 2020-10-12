const $ = document.querySelector.bind(document);
const speech = $('#speech');
const rateRange = $('#rate');
const pitchRange = $('#pitch');
const volumeRange = $('#volume');
const rateText = $('#rate-text');
const pitchText = $('#pitch-text');
const volumeText = $('#volume-text');
const speechSize = $('#speech-size');

const speechButton = $('#speech-button');
const pauseButton = $('#pause-button');
const resumeButton = $('#resume-button');



const utterance = new SpeechSynthesisUtterance();
let pitch = pitchRange.value;
let rate = rateRange.value;
let volume = volumeRange.value;
const characters = 32.767;

speechButton.addEventListener('click', () => {
    let speechText = speech.value;
    utterance.text = speechText;
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    speechSynthesis.speak(utterance);
});

rateRange.addEventListener('input', () => {
    rate = rateRange.value;
    rateText.innerHTML = rate;
});

pitchRange.addEventListener('input', () => {
    pitch = pitchRange.value;
    pitchText.innerHTML = pitch;
});

volumeRange.addEventListener('input', () => {
    volume = volumeRange.value;
    volumeText.innerHTML = parseInt(volume * 100);
});

speech.addEventListener('input', (e) => {
    let currentSize = speech.value.length;
    speechSize.innerHTML = `${currentSize}/${characters}`;
});

function init() {
    let currentSize = speech.value.length;
    rateText.innerHTML = rate;
    pitchText.innerHTML = pitch;
    volumeText.innerHTML = volume * 100;
    speechSize.innerHTML = `${currentSize}/${characters}`;
}

pauseButton.addEventListener('click', (e) => { 
    speechSynthesis.pause(utterance);
});

resumeButton.addEventListener('click', (e) => { 
    speechSynthesis.resume(utterance);
});

init();