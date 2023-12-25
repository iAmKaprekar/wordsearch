import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client'
import wordsearchGenerator from './wordsearch';

// Components
import OptionBar from './components/OptionBar';
import WordsearchBox from './components/WordsearchBox';
import WordBank from './components/WordBank';

const App = () => {

  const [board, setBoard] = useState([]);
  const [wordBank, setWordBank] = useState([]);

  useEffect(() => {
    const wordsearch = wordsearchGenerator(['kippy'], 0.5, 12);
    const initialWordBank = [];
  
    for (let word in wordsearch.wordPlacements) {
      initialWordBank.push(word);
    }
  
    setWordBank(initialWordBank);
    setBoard(wordsearch.board);
  }, []);

  return (
    <div id='app'>
      <OptionBar
        setBoard={setBoard}
        setWordBank={setWordBank}
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