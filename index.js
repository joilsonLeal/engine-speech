const $ = document.querySelector.bind(document);
const speech = $('#speech');
const speechButton = $('#speech-button');
const utterance = new SpeechSynthesisUtterance();

speechButton.addEventListener('click', () => {
    let speechText = speech.value;
    utterance.text = speechText;
    utterance.lang = 'pt-BR';
    utterance.rate = 5;
    speechSynthesis.speak(utterance);
});