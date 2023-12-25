import React from "react";
import LetterBox from "./LetterBox";

const Row = ({ size, row }) => {

  const boxes = [];
  for (let i = 0; i < size; i++) {
    boxes.push(<LetterBox key={i} letter={row[i]}/>)
  }

  return (
    <div className='row'>
      {boxes}
    </div>
  )
}
 
export default Row;