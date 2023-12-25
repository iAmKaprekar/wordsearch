import React from "react";

const WordBank = ({ words, options, setWords }) => {

  const removeWord = (e) => {
    let wordsSlice = words.slice();
    wordsSlice.splice(e.target.parentNode.id, 1);
    console.log(wordsSlice);
    setWords(wordsSlice);
  }

  const deleteButton = options ? <button onClick={removeWord}>X</button> : <></>;

  const wordElements = [];

  for (let i = 0; i < words.length; i++) {
    wordElements.push(
      <div key={i} id={i} className="bankEntry">
        <p>{words[i]}</p>
        {deleteButton}
      </div>
    )
  }

  return (
    <div id='wordBank'>
      {wordElements}
    </div>
  )
}
 
export default WordBank;