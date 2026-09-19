// src/domain/speech.js
// Wraps the Web Speech API for reading lessons aloud.

export function speakText(text, opts = {}) {
  if (!('speechSynthesis' in window)) {
    return { ok: false, error: 'Speech synthesis not supported.' };
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(String(text).slice(0, 2000));
  utter.rate = opts.rate ?? 0.9;
  utter.pitch = opts.pitch ?? 1.1;
  utter.lang = opts.lang ?? 'en-GB';
  window.speechSynthesis.speak(utter);
  return { ok: true };
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}