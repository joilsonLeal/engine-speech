const $ = document.querySelector.bind(document);
const speech = $('#speech');
const speechButton = $('#speech-button');
const rateRange = $('#rate');
const pitchRange = $('#pitch');
const rateText = $('#rate-text');
const pitchText = $('#pitch-text');
const speechSize = $('#speech-size');
const utterance = new SpeechSynthesisUtterance();
let pitch = pitchRange.value;
let rate = rateRange.value;
const characters = 32.767;

speechButton.addEventListener('click', () => {
    let speechText = speech.value;
    utterance.text = speechText;
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = pitch;
    speechSynthesis.speak(utterance);
});

rateRange.addEventListener('input', () => {
    rate = rateRange.value;
    rateText.innerHTML = rate;
    utterance.rate = rate;
});

pitchRange.addEventListener('input', () => {
    pitch = pitchRange.value;
    pitchText.innerHTML = pitch;
    utterance.pitch = pitch;
});

speech.addEventListener('input', (e) => {
    let currentSize = speech.value.length;
    speechSize.innerHTML = `${currentSize}/${characters}`;
});

function init() {
    let currentSize = speech.value.length;
    rateText.innerHTML = rate;
    pitchText.innerHTML = pitch;
    speechSize.innerHTML = `${currentSize}/${characters}`;
}

init();