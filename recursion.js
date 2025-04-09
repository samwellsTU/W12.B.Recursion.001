//1. Make a function that computes a factorial recursively

const factorial = function (num) {
  if (num === 0) {
    //base case
    return 1;
  } else {
    //recursive case
    return num * factorial(num - 1);
  }
};

//2. Make a function that recursively transposes a MIDI pitch down until it is in C Major

const cMajor = [0, 2, 4, 5, 7, 9, 11];

const scaleMap = function (midiIn) {
  //test to see if note is in the scale
  if (cMajor.includes(midiIn % 12)) {
    //base base case
    return midiIn;
  } else {
    return scaleMap(midiIn - 1);
  }
};
