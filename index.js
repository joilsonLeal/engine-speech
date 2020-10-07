const $ = document.querySelector.bind(document);
const speech = $('#speech');
const speechButton = $('#speech-button');
const rateRange = $('#rate');
const rateText = $('#rateText');
const utterance = new SpeechSynthesisUtterance();
let rate = rateRange.value;

speechButton.addEventListener('click', () => {
    let speechText = speech.value;
    utterance.text = speechText;
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
});

rateRange.addEventListener('change', () => {
    rate = rateRange.value;
    rateText.innerHTML = rate;
});

function init() {
    rateText.innerHTML = rate;
}

init();