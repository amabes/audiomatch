export const grammarPairs = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7',
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7',
  'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7',
  'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7',
  'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'
];

export const initializeSpeechRecognition = () => {
  const WebkitSpeechRecognition = window.webkitSpeechRecognition;
  const WebkitSpeechGrammarList = window.webkitSpeechGrammarList;

  if (window.AudioMatch === undefined) {
    window.AudioMatch = { recognition: {} };
  }

  if (WebkitSpeechRecognition) {
    window.AudioMatch.recognition = new WebkitSpeechRecognition();
    window.AudioMatch.recognition.continuous = false;
    window.AudioMatch.recognition.lang = 'en-US';
    window.AudioMatch.recognition.interimResults = false;
    window.AudioMatch.recognition.maxAlternatives = 1;

    if (WebkitSpeechGrammarList) {
      // WebkitSpeechGrammarList is not currently available in Safari
      // and does not have any effect in any other browser.
      const speechRecognitionList = new WebkitSpeechGrammarList();
      const grammar = `#JSGF V1.0; grammar pairs; public <pair> = ${grammarPairs.join(' | ')} ;`;
      speechRecognitionList.addFromString(grammar, 1);
      window.AudioMatch.recognition.grammars = speechRecognitionList;
    }
  }
};
