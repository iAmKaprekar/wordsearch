import React, {useState} from "react";
import WordBank from "./WordBank";
import wordsearchGenerator from '../wordsearch.js';

const OptionBar = ({ setBoard }) => {
  const [newWords, setNewWords] = useState([]);
  const [newWordInput, setNewWordInput] = useState('');
  const [sizeInput, setSizeInput] = useState(12);
  const [difficultyInput, setDifficultyInput] = useState(50);

  const addNewWord = (word) => {
    const wordsSlice = newWords.slice();
    wordsSlice.push(word);
    setNewWords(wordsSlice);
    setNewWordInput('');
  }

  const submitWord = (e) => {
    if (e.key === 'Enter') {
      addNewWord(newWordInput);
    }
  }

  const newWordsearch = () => {
    const wordsearch = wordsearchGenerator(newWords, difficultyInput/100, sizeInput);
    setBoard(wordsearch.board);
  }

  return (
    <div id='options'>
      <p>Difficulty</p>
      <input type='range' value={difficultyInput} onChange={(e) => setDifficultyInput(e.target.value)}></input>
      <p>Size</p>
      <input type='number' value={sizeInput} onChange={(e) => setSizeInput(e.target.value)}></input>
      <p>Word Bank</p>
      <input value={newWordInput} onKeyUp={submitWord} onChange={(e) => setNewWordInput(e.target.value)}></input>
      <button onClick={() => addNewWord(newWordInput)}>Add Word</button>
      <WordBank words={newWords} options={true} setWords={setNewWords}/>
      <button onClick={() => newWordsearch()}>Create New Wordsearch</button>
    </div>
  )
}
 
export default OptionBar