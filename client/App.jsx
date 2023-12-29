import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client'
import wordsearchGenerator from './wordsearch';
import style from '../assets/style.css';

// Components
import OptionBar from './components/OptionBar';
import WordsearchBox from './components/WordsearchBox';
import WordBank from './components/WordBank';

const App = () => {

  const [board, setBoard] = useState([]);
  const [wordBank, setWordBank] = useState([]);
  const [color, setColor] = useState('hsl(0, 100%, 100%)');

  useEffect(() => {
    const wordsearch = wordsearchGenerator(['default','template','wordsearch'], 0.5, 12);
    const initialWordBank = [];
  
    for (let word in wordsearch.wordPlacements) {
      initialWordBank.push(word);
    }
  
    setWordBank(initialWordBank);
    setBoard(wordsearch.board);

    const date = new Date();
    const month = date.getMonth() - 7;
    const dayNum = date.getDate() - 20;
  
    const hue = 30 * -month - dayNum;
  
    console.log('Month:', month);
    console.log('Day:', dayNum);
    console.log('Hue:', hue);

    setColor(`hsl(${hue}, 80%, 80%)`);

  }, []);

  return (
    <div id='app'>
      <OptionBar
        setBoard={setBoard}
        setWordBank={setWordBank}
        color={color}
      />
      <div id='game'>
        <WordsearchBox
          board={board}
        />
        <div id='bankBar'>
          <p>Word Bank</p>
          <WordBank
            options={false}
            words={wordBank}
          />
        </div>
      </div>
    </div>
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);