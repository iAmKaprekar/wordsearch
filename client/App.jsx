import React, {useState} from 'react';
import { createRoot } from 'react-dom/client'
import wordsearchGenerator from './wordsearch';

// Components
import OptionBar from './components/OptionBar';
import WordsearchBox from './components/WordsearchBox';

const App = () => {

  const wordBank = ['kippy'];
  const wordsearch = wordsearchGenerator(wordBank, 0.5, 12);

  const [board, setBoard] = useState(wordsearch.board);

  return (
    <div id='app'>
      <OptionBar
        setBoard={setBoard}
      />
      <WordsearchBox
        board={board}
      />
    </div>
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);