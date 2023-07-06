import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { squareColumnClasses } from '../../services/squares';
import GameKeyboardInput from '../GameKeyboardInput';
import { initializeSpeechRecognition } from '../../services/speechRecognition';
import {
  GameBoardContainer, GameSquare, GameSquareContainer, GameTitle
} from './styles';

// Initialize SpeechRecognition
// instantiate window.AudioMatch.recognition
initializeSpeechRecognition();

const GameBoard = ({
  squares,
  className,
  symbols,
  loadNextRound,
  roundData
}) => {
  const [inputMethod, setInputMethod] = useState('touch');
  const [currentRound, setCurrentRound] = useState(0);
  const [roundLoaded, setRoundLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userWonRound, setUserWonRound] = useState(false);
  const [userWinsGame, setUserWinsGame] = useState(false);
  const [prevOrderedPair, setPrevOrderedPair] = useState(null);
  const [orderedPair, setOrderedPair] = useState(null);
  const [correctOrderedPairs, setCorrectOrderedPairs] = useState({});
  const [microphonePermission, setMicrophonePermission] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    navigator.permissions.query({ name: 'microphone' }).then((res) => {
      // @state {string} granted, denied, prompt
      setMicrophonePermission(res.state);
    });
  }, []);

  // TODO support larger symbol sets than 12

  const canPlayWithVoice = useMemo(() => {
    return window.webkitSpeechRecognition && window.webkitSpeechGrammarList;
  }, [window.webkitSpeechRecognition, window.webkitSpeechGrammarList]);

  window.AudioMatch.recognition.onstart = () => {
    console.log('recognition (onstart)');
    setIsListening(true);
  };

  window.AudioMatch.recognition.onresult = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent
    const letter = event.results[0][0].transcript;

    console.log('recognition (onresult) : transcript', letter);
    console.log('recognition (onresult) : confidence', event.results[0][0].confidence);

    selectOrderedPair(letter);
  };

  window.AudioMatch.recognition.onerror = (event) => {
    console.log(`recognition (onerror): ${event.error}`);

    if (inputMethod === 'voice' && event?.error === 'no-speech') {
      toast.error('No speech detected. Click microphone to reactivate.', { autoClose: false });
      setIsListening(false);
      window.AudioMatch.recognition.stop();
      setInputMethod('touch');
    }
  };

  const startRecognition = () => {
    setTimeout(() => {
      try {
        window.AudioMatch.recognition.start();
        setIsListening(true);
        console.log('recognition (start) success');
      } catch (error) {
        console.log('recognition (error)', error);
      }
    }, 400);
  };

  const abortRecognition = () => {
    window.AudioMatch.recognition.abort();
    setIsListening(false);
    console.log('recognition (abort)');
  };

  useEffect(() => {
    if (!roundLoaded && !userWinsGame) {
      loadNextRound(currentRound);
      setRoundLoaded(true);
    }
  }, [squares, symbols]);

  const initPlayWithVoice = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('getUserMedia (success)', stream);
      setMicrophonePermission(true);
    } catch (error) {
      console.log('getUserMedia (error)', error);
      setMicrophonePermission(false);
      setInputMethod('touch');
    }
  };

  const resetForNextSelection = () => {
    const keyboardInput = document.getElementById('keyboardInput');

    setOrderedPair(null);
    setPrevOrderedPair(null);
    setLoading(false);

    console.log('resetForNextSelection');
    if (inputMethod === 'voice') {
      startRecognition();
    }

    if (keyboardInput && inputMethod === 'keyboard') {
      keyboardInput.focus();
    }
  };

  const selectOrderedPair = (selectedOrderedPair) => {
    const sop = selectedOrderedPair.toUpperCase();
    const square = document.getElementById(sop);
    const keyboardInput = document.getElementById('keyboardInput');

    toast.dismiss();

    if (inputMethod === 'voice') {
      abortRecognition();
    }

    if (!square) {
      toast.error('Guess ordered pairs within the grid.');

      if (inputMethod === 'keyboard') {
        keyboardInput.value = '';
      }

      if (inputMethod === 'voice') {
        startRecognition();
      }

      return false;
    }

    const { dataset: { label } } = square;

    if (orderedPair) {
      setPrevOrderedPair(orderedPair);
    }

    setOrderedPair([sop, label]);

    // 0 = Ordered Pair, ex: A2
    // 1 = Label, ex: Fish
    if (orderedPair) {
      // Check if labels are the same and if ordered pairs are different
      setLoading(true);

      if (orderedPair[1] === label && orderedPair[0] !== sop) {
        const cop = {
          ...correctOrderedPairs,
          [sop]: label,
          [orderedPair[0]]: orderedPair[1]
        };

        setCorrectOrderedPairs(cop);

        // Starting speech recognition again after aborting requires waiting at least 400ms
        setTimeout(() => {
          resetForNextSelection();
        }, 400);
      } else {
        toast.error('Try again');
        // Delay reset to allow the user to see the choices they made;
        // Starting speech recognition again after aborting requires waiting at least 400ms
        setTimeout(() => {
          resetForNextSelection();
        }, 1500);
      }
    }

    if (!orderedPair && inputMethod === 'voice') {
      startRecognition();
    }

    if (keyboardInput && inputMethod === 'keyboard') {
      keyboardInput.value = '';
    }
  };

  const showIcon = (square) => {
    let visibility = false;

    if (correctOrderedPairs[square.id] !== undefined) {
      visibility = true;
    }

    if (orderedPair && orderedPair[0] === square.id) {
      visibility = true;
    }

    if (prevOrderedPair && prevOrderedPair[0] === square.id) {
      visibility = true;
    }

    return visibility;
  };

  const handleLoadNextRound = () => {
    const nextRound = currentRound + 1;
    setUserWonRound(false);
    setRoundLoaded(false);
    setCorrectOrderedPairs({});
    setCurrentRound(nextRound);
    loadNextRound(nextRound);

    if (inputMethod === 'voice') {
      startRecognition();
    }
  };

  if (!squares || !symbols) return null;

  // User won round & wins game logic
  if (!userWonRound && Object.keys(correctOrderedPairs).length === squares.length) {
    setUserWonRound(true);

    const nextRound = (currentRound + 1) + 1;
    const nextRoundSymbolLength = nextRound * 2;

    if (nextRoundSymbolLength > 12 || nextRoundSymbolLength > roundData.length) {
      // If the next round symbol length is...
      // 1. greater than 12, the game is complete
      // 2. greater than total symbols available, the game is complete
      //
      // TODO remove #1 logic once UI exist to inform user that a larger screen
      // is needed to play higher levels.
      setUserWinsGame(true);
      toast.success('You win!');

      return null;
    }

    toast.success('Nice job!');
  }

  console.log('Listening', isListening);

  return (
    <GameBoardContainer
      className={`m-auto px-5 d-flex align-items-center justify-content-center h-100 ${className || ''}`}
    >
      <div>
        <GameTitle className="text-muted">
          Round {currentRound + 1}
        </GameTitle>
        <div className="row align-items-start">
          {squares.map((square, i) => (
            <div
              key={i}
              className={squareColumnClasses(symbols)}
            >
              <GameSquareContainer>
                <GameSquare
                  id={square.id}
                  data-label={square.label}
                  className={`game-square bg-${correctOrderedPairs[square.id] !== undefined ? 'success' : 'secondary'} mb-3 d-flex align-items-center justify-content-center text-white`}
                  xLabel={square.xLabel}
                  yLabel={square.yLabel}
                  onClick={() => {
                    if (inputMethod !== 'touch') {
                      setInputMethod('touch');
                    }

                    if (!loading) {
                      selectOrderedPair(square.id);
                    }
                  }}
                >
                  {showIcon(square) && (
                    <i className={square.icon} style={{ fontSize: '2rem' }} />
                  )}
                </GameSquare>
              </GameSquareContainer>
            </div>
          ))}
        </div>

        {!userWonRound && (
          <div
            className="d-flex align-item-center justify-content-center flex-column"
          >
            {inputMethod === 'keyboard' && (
              <GameKeyboardInput
                onSubmit={(inputOrderedPair) => {
                  selectOrderedPair(inputOrderedPair);
                }}
                loading={loading}
              />
            )}

            <div className="mx-auto mt-3">
              <div
                className="btn-group border rounded"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className={`btn btn-${inputMethod === 'touch' ? 'primary' : 'light'} border-right`}
                  onClick={() => {
                    if (inputMethod === 'voice') {
                      abortRecognition();
                    }
                    if (inputMethod !== 'touch') {
                      setInputMethod('touch');
                    }
                  }}
                >
                  <i className="fa fa-hand-pointer-o" />
                </button>
                <button
                  type="button"
                  className={`btn btn-${inputMethod === 'keyboard' ? 'primary' : 'light'} border-right`}
                  onClick={() => {
                    if (inputMethod === 'voice') {
                      abortRecognition();
                    }
                    if (inputMethod !== 'keyboard') {
                      setInputMethod('keyboard');
                    }
                  }}
                >
                  <i className="fas fa-keyboard" />
                </button>

                {canPlayWithVoice && (
                  <button
                    type="button"
                    className={`position-relative btn btn-${inputMethod === 'voice' ? 'primary' : 'light'}`}
                    onClick={() => {
                      if (inputMethod !== 'voice') {
                        setInputMethod('voice');

                        navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
                          startRecognition();
                        }).catch(() => {
                          initPlayWithVoice();
                        });
                      }
                    }}
                  >
                    {microphonePermission !== 'denied' ? (
                      <i className="fas fa-microphone" />
                    ) : (
                      <i className="fa fa-microphone-slash text-muted" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {userWonRound && (
          <div
            className="d-flex align-item-center justify-content-center flex-column"
          >
            <div className="mx-auto mt-3">
              {userWinsGame ? (
                <div>
                  <h4>
                    <i className="fas fa-check-circle text-success" /> You win!
                  </h4>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    handleLoadNextRound();
                  }}
                >
                  Next Round
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </GameBoardContainer>
  );
};

export default GameBoard;
