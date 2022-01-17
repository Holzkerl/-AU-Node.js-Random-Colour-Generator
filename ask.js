if (hue === 'ask') {
  console.log('Choose width: 11-55 (only odd numbers)');                    boxWidth = process.argv [2];
  console.log('Choose height: 5-21 (only odd numbers)');                    boxHeight = process.argv [3];
  console.log('Choose a colour: red, green, blue, magenta, yellow, cyan');  hue = process.argv [4];
  console.log('Choose a brightness level: light, bright, dark');            brightness = process.argv[5];
}