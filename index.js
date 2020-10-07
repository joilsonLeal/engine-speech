const $ = document.querySelector.bind(document);
const speech = $('#speech');
const speechButton = $('#speech-button');
const rateRange = $('#rate');
const rateText = $('#rate-text');
const speechSize = $('#speech-size');
const utterance = new SpeechSynthesisUtterance();
let rate = rateRange.value;
const characters = 32.767;

speechButton.addEventListener('click', () => {
    let speechText = speech.value;
    utterance.text = speechText;
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
});

rateRange.addEventListener('input', () => {
    rate = rateRange.value;
    rateText.innerHTML = rate;
});

speech.addEventListener('input', (e) => {
    let currentSize = speech.value.length;
    speechSize.innerHTML = `${currentSize}/${characters}`;
});

function init() {
    let currentSize = speech.value.length;
    rateText.innerHTML = rate;
    speechSize.innerHTML = `${currentSize}/${characters}`;
}

init();