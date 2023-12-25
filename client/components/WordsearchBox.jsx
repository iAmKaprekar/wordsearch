import React from "react";
import Row from "./Row";

const WordsearchBox = ({ board }) => { 

  const size = board.length;

  const rows = [];
  for (let i = 0; i < size; i++) {
    rows.push(<Row key={i} size={size} row={board[i]}/>);
  }

  return (
    <div id='mainBox'>
      {rows}
    </div>
  )
}
 
export default WordsearchBox