import { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Notification from './Components/Notification';
import PopUp from './Components/PopUp';
import { Helper as show } from './Helpers/Helper';
import './App.css';

const words = [
  'programacion',
  'tortuga',
  'pintor',
  'casa',
  'perro',
  'gato',
  'elefante',
  'caballo',
  'mesa',
  'comida',
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);

    // Empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    const ramdom = Math.floor(Math.random() * words.length);
    selectedWord = words[ramdom];
  };

  return (
    <>
      <Header />
      <div className='gameContainer'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <PopUp
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
