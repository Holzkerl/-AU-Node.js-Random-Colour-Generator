//import chalk from 'chalk';

// function for generating numbers
function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// hue and brightness input
const hue = process.argv [2];
const brightness = process.argv [3];

// declares colour variables and generates a random number between 0 and 16
let red1 = rand(0,15);    let red2 = rand(0,15);
let green1 = rand(0,15);  let green2 = rand(0,15);
let blue1 = rand(0,15);   let blue2 = rand(0,15);

// leads the randomness into a specific colour by limiting the colour ranges
switch (hue) {
  case 'red':       red1 = rand(12,15);  green1 = rand( 0, 3);  blue1 = rand( 0, 3);  break;
  case 'green':     red1 = rand( 0, 3);  green1 = rand(12,15);  blue1 = rand( 0, 3);  break;
  case 'blue':      red1 = rand( 0, 3);  green1 = rand( 0, 3);  blue1 = rand(12,15);  break;
  case 'magenta':   red1 = rand(12,15);  green1 = rand( 0, 3);  blue1 = rand(12,15);  break;
  case 'yellow':    red1 = rand(12,15);  green1 = rand(12,15);  blue1 = rand( 0, 3);  break;
  case 'cyan':      red1 = rand( 0, 3);  green1 = rand(12,15);  blue1 = rand(12,15);  break;
  default: break;
}

// adjusts brightness
switch (brightness) {
  case 'light': // adds brightness
    if (red1 <= 4)    {red1 = red1 + 8;}
    if (green1 <= 4)  {green1 = green1 + 8;}
    if (blue1 <= 4)   {blue1 = blue1 + 8;}
    break;
  case 'dark': // substracts brightness
    if (red1 >= 12)   {red1 = red1 - 8;}
    if (green1 >= 12) {green1 = green1 - 8;}
    if (blue1 >= 12)  {blue1 = blue1 - 8;}
    break;
  default: break;
}

// converts the final numbers into hex code (string) and merges them
red1 = red1.toString(16);      red2 = red2.toString(16);
green1 = green1.toString(16);  green2 = green2.toString(16);
blue1 = blue1.toString(16);    blue2 = blue2.toString(16);

const number = '#' + red1 + red2 + green1 + green2 + blue1 + blue2;

// output
console.log(/*chalk.hex(number).bold(*/`
###############################
###############################
###############################
#####                     #####
#####       ${number}       #####
#####                     #####
###############################
###############################
###############################`//)
);