// creates the lines with the # and spaces
let spaceLine = '';
while (spaceLine.length < boxWidth) {
  if (
    spaceLine.length < Math.ceil((boxWidth - 9) / 4) ||
    spaceLine.length > Math.ceil((boxWidth * 3) / 4 + 0.5)
  ) {
    spaceLine = spaceLine + '#';
  } else {
    spaceLine = spaceLine + ' ';
  }
}

// creates the middle line with the hex colour code
let middleLine = '';
let spaces = 0;
let count = 0;
while (middleLine.length < boxWidth) {
  if (
    middleLine.length < Math.ceil((boxWidth - 9) / 4) ||
    middleLine.length > Math.ceil((boxWidth * 3) / 4 + 0.5)
  ) {
    middleLine = middleLine + '#';
  } else {
    for (count = Math.ceil((boxWidth - 9) / 4 + 0.5); count > 0; count--) {
      middleLine = middleLine + ' ';
      spaces++;
    }
    middleLine = middleLine + '#number';
    for (count = spaces; count > 0; count--) {
      middleLine = middleLine + ' ';
    }
  }
}
