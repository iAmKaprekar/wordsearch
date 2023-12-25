import React from "react";
import LetterBox from "./LetterBox";

const Row = ({ size, row }) => {

  const boxes = [];
  for (let i = 0; i < size; i++) {
    boxes.push(<LetterBox key={i} letter={row[i]}/>)
  }

  return (
    <div className='row' style={{'fontSize': 500/size}}>
      {boxes}
    </div>
  )
}
 
export default Row;