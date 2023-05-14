const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-button");

speakButton.addEventListener("click", () => {
  const text = textInput.value;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
});