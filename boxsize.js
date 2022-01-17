// defines the size of the box (11 <= width => 55; 5 <= height => 21)
// always converts to odd numbers to keep it nicely centered
let boxWidth = parseInt(process.argv[2]);
if (boxWidth < 11) {
  boxWidth = 11;
}
if (boxWidth > 55) {
  boxWidth = 55;
}
if (boxWidth % 2 === 0) {
  boxWidth = boxWidth + 1;
}

let boxHeight = parseInt(process.argv[3]);
if (boxHeight < 5) {
  boxHeight = 5;
}
if (boxHeight > 21) {
  boxHeight = 21;
}
if (boxHeight % 2 === 0) {
  boxHeight = boxHeight + 1;
}

// creates the lines with the # rows
let hashLine = '';
while (hashLine.length < boxWidth) {
  hashLine = hashLine + '#';
}

// creates the parts for the 3 lines in the middle and merges them afterwards
const midBorder = (boxWidth - 7) / 4;
let midHashCount = Math.floor(midBorder);
let midHash = '';
for (midHashCount; midHashCount > 0; midHashCount--) {
  midHash = midHash + '#';
}
let midSpaceCount = Math.ceil(midBorder);
let midSpace = '';
for (midSpaceCount; midSpaceCount > 0; midSpaceCount--) {
  midSpace = midSpace + ' ';
}

const spaceLine = midHash + midSpace + '       ' + midSpace + midHash;
const middleLine = midHash + midSpace + '#number' + midSpace + midHash;

// output
for (let count = (boxHeight - 3) / 2; count > 0; count--) {
  console.log(hashLine);
}
console.log(spaceLine);
console.log(middleLine);
console.log(spaceLine);
for (let count = (boxHeight - 3) / 2; count > 0; count--) {
  console.log(hashLine);
}
