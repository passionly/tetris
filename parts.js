const CODES = ['i', 'j', 'l', 'o', 's', 't', 'z'];
const PARTS = {
  'i': {
    rows: 4,
    cols: 4,
    shape: [
      [[' ', 'i', ' ', ' '],
       [' ', 'i', ' ', ' '],
       [' ', 'i', ' ', ' '],
       [' ', 'i', ' ', ' ']],
      [[' ', ' ', ' ', ' '],
       ['i', 'i', 'i', 'i'],
       [' ', ' ', ' ', ' '],
       [' ', ' ', ' ', ' ']]
    ]
  },
  'j': {
    rows: 3,
    cols: 3,
    shape: [
      [[' ', 'j', ' '],
       [' ', 'j', ' '],
       ['j', 'j', ' ']],
      [['j', ' ', ' '],
       ['j', 'j', 'j'],
       [' ', ' ', ' ']],
      [[' ', 'j', 'j'],
       [' ', 'j', ' '],
       [' ', 'j', ' ']],
      [[' ', ' ', ' '],
       ['j', 'j', 'j'],
       [' ', ' ', 'j']]
    ]
  },
  'l': {
    rows: 3,
    cols: 3,
    shape: [
      [[' ', 'l', ' '],
       [' ', 'l', ' '],
       [' ', 'l', 'l']],
      [[' ', ' ', ' '],
       ['l', 'l', 'l'],
       ['l', ' ', ' ']],
      [['l', 'l', ' '],
       [' ', 'l', ' '],
       [' ', 'l', ' ']],
      [[' ', ' ', 'l'],
       ['l', 'l', 'l'],
       [' ', ' ', ' ']]
    ]
  },
  'o': {
    rows: 2,
    cols: 2,
    shape: [
      [['o', 'o'],
       ['o', 'o']]
    ]
  },
  's': {
    rows: 3,
    cols: 3,
    shape: [
      [['s', ' ', ' '],
       ['s', 's', ' '],
       [' ', 's', ' ']],
      [[' ', ' ', ' '],
       [' ', 's', 's'],
       ['s', 's', ' ']]
    ]
  },
  't': {
    rows: 3,
    cols: 3,
    shape: [
      [[' ', 't', ' '],
       [' ', 't', 't'],
       [' ', 't', ' ']],
      [[' ', ' ', ' '],
       ['t', 't', 't'],
       [' ', 't', ' ']],
      [[' ', 't', ' '],
       ['t', 't', ' '],
       [' ', 't', ' ']],
      [[' ', 't', ' '],
       ['t', 't', 't'],
       [' ', ' ', ' ']]
    ]
  },
  'z': {
    rows: 3,
    cols: 3,
    shape: [
      [[' ', 'z', ' '],
       ['z', 'z', ' '],
       ['z', ' ', ' ']],
      [[' ', ' ', ' '],
       ['z', 'z', ' '],
       [' ', 'z', 'z']]
    ]
  }
};

function randomPart() {
  return PARTS[CODES[Math.floor(Math.random() * CODES.length)]];
}
