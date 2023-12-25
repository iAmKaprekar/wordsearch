// To fix:
// Reversed words need to be filtered (i.e. ton & not)
// Check for only one solution to each word

const wordsearch = (words, difficulty = 0, size = 0) => {

  // Declare necessary variables
  let charSpace = 0;
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const validCharSet = new Set(validChars);
  
  // Input sanitization: remove non-words, set to lowercase
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') words[i] = null;
    else words[i] = words[i].toUpperCase();
    for (let char of words[i]) {
      if (!validCharSet.has(char)) words[i] = null;
    }
  }
  
  // Input sanitization: remove repeat instances of words
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i]?.includes(words[j])) words[j] = null;
      if (words[j]?.includes(words[i])) words[i] = null;
    }
  }
  
  // Input sanitization: clean word list and remove 1 letter words
  const wordBank = words.filter(word => {
    return word && word.length > 1;
  })
  
  // Determine necessary board size
  for (const word of wordBank) {
    charSpace += word.length;
    size = Math.max(size, word.length);
  }
  
  size = Math.max(Math.ceil(Math.sqrt(2 * charSpace)), size);
  
  // Store a letter bank for higher difficulties to reference
  const wordChars = wordBank.join('');
  
  // Generate board
  let board = new Array(size).fill(new Array(size).fill('-'));
  
  // Define random integer function
  const randInt = (num) => {
    return Math.floor(Math.random() * num);
  }
  
  // Define function to check solutons
  // const checkValidity = (board) => {
  //   const knownSolves = {};
  //   for (const word of wordBank) {
  //     knownSolves[word] = 0;
  //     for (let row = 0; row < board.length; row++) {
  //       for (let column = 0; column < board[0].length; column++) {
  //         for (let )
  //       }
  //     }
  //   }
  // }
  
  // Fill board with words
  const wordPlacements = {};
  
  for (const word of wordBank) {
    let valid;
    let newBoard;
    while (!valid) {
      // Create slice of board state
      newBoard = board.map(row => row.slice());
      valid = true;
      
      // Determine a random word direction
      let verticalMovement = 0;
      let horizontalMovement = 0;
      while (!verticalMovement && !horizontalMovement) {
        verticalMovement = randInt(3) - 1;
        horizontalMovement = randInt(3) - 1;
      }
      
      // Determine an initial position
      let row = randInt(size);
      let column = randInt(size);
      
      wordPlacements[word] = {
        row: row,
        column: column,
        verticalMovement: verticalMovement,
        horizontalMovement: horizontalMovement,
      };
      
      // Attempt to lay word in position iterating across direction
      for (let char of word) {
        if (
          row >= size ||
          row < 0 ||
          column >= size ||
          column < 0 ||
          newBoard[row][column] !== '-' &&
          newBoard[row][column] !== char
        ) {
          valid = false;
          break;
        } else {
          newBoard[row][column] = char;
        }
        
        row += verticalMovement;
        column += horizontalMovement;
      }
    }
    board = newBoard;
  }
  
  const solutions = board.map(row => row.slice());
  
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if (board[row][column] === '-') {
        board[row][column] = Math.random() > difficulty ? validChars[randInt(26)] : wordChars[randInt(wordChars.length)];
      }
    }
  }
  
  // Return final wordsearch
  return {
    solutions: solutions,
    board: board,
    wordPlacements: wordPlacements
  };
}

export default wordsearch;