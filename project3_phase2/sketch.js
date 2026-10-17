
let page = 0
let canvasColor = [75,0,130];
let offColor = [45, 45, 60]; 

// Global Arrays
let comet = [
  [3, 3, 1, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2],
  [3, 3, 3, 2, 3, 3, 3, 2, 3, 1, 3, 3, 3, 2, 2, 3],
  [3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3],
  [2, 4, 6, 3, 3, 3, 3, 3, 3, 3, 2, 6, 2, 3, 3, 3],
  [6, 6, 2, 3, 3, 3, 3, 3, 2, 2, 4, 2, 2, 3, 3, 3],
  [2, 2, 3, 3, 3, 3, 2, 2, 2, 4, 6, 2, 3, 3, 1, 3],
  [3, 3, 3, 3, 2, 2, 2, 4, 4, 4, 6, 2, 3, 3, 3, 3],
  [3, 3, 3, 2, 2, 2, 4, 4, 4, 6, 2, 3, 3, 3, 3, 3],
  [3, 3, 3, 2, 2, 4, 4, 4, 6, 2, 2, 3, 3, 3, 3, 2],
  [3, 3, 2, 2, 4, 6, 4, 6, 6, 2, 3, 3, 3, 3, 2, 3],
  [1, 3, 2, 6, 4, 6, 6, 6, 2, 2, 3, 3, 2, 2, 3, 3],
  [3, 3, 2, 6, 6, 6, 6, 2, 2, 3, 3, 2, 4, 2, 3, 3],
  [3, 3, 2, 6, 6, 6, 6, 2, 3, 3, 3, 2, 2, 3, 3, 3],
  [3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3]
];

let meteor = [
    [0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 3, 3, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 3, 3, 1, 1, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 2, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 2, 1, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 2, 1, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 3, 2, 3, 3, 3, 3, 3, 2, 2, 1, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0],
    [0, 0, 1, 1, 3, 3, 2, 3, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 4, 0],
    [0, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 2, 2, 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let planet = [
    [7, 7, 7, 7, 7, 7, 2, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 2, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 5, 7, 7, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 7, 7, 7, 7],
    [7, 5, 7, 7, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 7, 2, 7, 7, 7],
    [2, 7, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 7, 7, 2, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 7, 7, 2, 2, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 3, 7, 2, 2, 7, 7, 7, 3, 3, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 2, 2, 2, 3, 3, 7, 7, 7, 2, 3, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 2, 2, 2, 2, 2, 3, 7, 7, 7, 2, 3, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 2, 2, 3, 3, 2, 3, 7, 7, 7, 2, 3, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 2, 2, 2, 3, 2, 3, 7, 7, 2, 3, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 2, 2, 3, 3, 2, 3, 7, 2, 2, 2, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 2, 2, 2, 3, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 2, 7, 5, 2, 2, 3, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 2, 7, 7, 7, 2, 2, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7],
    [2, 2, 7, 7, 7, 7, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 3, 7, 7, 7, 7, 7],
    [3, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 7, 3, 7, 7, 7, 7],
    [3, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 3, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 2, 7, 7, 7, 7],
    [7, 7, 3, 7, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 7, 7]
];

let galaxy = [
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [2, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 3, 1, 0, 0, 0, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 3, 1, 0, 3, 3, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 3, 0, 0, 4, 0, 0],
    [0, 4, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 3, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 1, 0, 0, 0, 1, 1, 2, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 3, 1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 3, 0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let star = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 6, 6, 6, 2, 4, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2, 6, 6, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 6, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6, 2, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 4, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
];

let pikachu = [
    [1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1],
    [1, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1],
    [1, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 4, 4, 4, 1, 1, -1, -1, -1, -1],
    [4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 4, 4, 4, 1, 1, -1, -1, -1, -1, -1],
    [4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 1, -1, -1, -1, -1, -1, -1],
    [4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, -1, -1, -1, -1, -1, -1, -1],
    [-1, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 0, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, 4],
    [-1, -1, 0, 2, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4],
    [-1, 0, 1, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4],
    [-1, 0, 3, 4, 4, 1, 4, 4, 4, 4, 3, 3, 4, 4, 4, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4],
    [-1, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, -1, -1, -1, 4, 4, 4, 4, 4, 4],
    [-1, 0, 3, 4, 4, 1, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, -1, -1, 0, 4, 4, 4, 4, 4, 4],
    [-1, -1, 4, 4, 1, 4, 1, 4, 4, 4, 3, 3, 4, 4, 4, 4, -1, 0, 4, 4, 4, 4, 4, 4, 4],
    [-1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4],
    [-1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, 0, 0, 4, 4, 4, 4, 4, 0],
    [-1, -1, -1, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, -1, -1, 0, 0, 4, 4, 4, 4, 4],
    [-1, -1, -1, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, 0, 4, 4, 4, 4],
    [-1, -1, -1, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, -1, -1, -1, -1, 0, 4, 4, 4],
    [-1, -1, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, -1, -1, -1, 0, 4, 4, 4, 4],
    [-1, -1, 4, 0, 0, 0, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, -1, -1, 0, 4, 4, 4, 0, 0],
    [-1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 0, -1, -1],
    [-1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, -1, -1, -1]
];

let oshawatt = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 4, 4, 4, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 4, 4, 4, -1, -1, -1],
    [-1, -1, -1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, -1, -1],
    [-1, -1, -1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, -1, -1],
    [-1, -1, -1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, -1, -1],
    [-1, -1, -1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, -1, -1],
    [-1, -1, -1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, -1, -1],
    [-1, -1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, -1],
    [-1, -1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, -1],
    [-1, -1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 1, 1, -1],
    [-1, -1, 1, 1, 1, 1, 1, 0, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 1, 1, 1, 1, 1, -1],
    [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [-1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, 5, 5, 5, 5, 1, 1, 5, 5, 1, 1, 5, 5, 5, 5, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 1, 1, 5, 5, 5, 5, 3, 5, 3, 3, 5, 3, 5, 5, 5, 1, 1, 1, 1, -1, -1],
    [-1, -1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 3, 3, 3, 3, 3, 5, 5, 1, 1, 1, 1, 1, 1, -1],
    [-1, 1, 1, 1, 1, 1, 1, 1, 4, 5, 5, 3, 3, 3, 3, 5, 5, 4, 1, 1, 1, 1, 1, 1, 1],
    [-1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 5, 3, 3, 5, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
    [-1, -1, 1, 1, 1, 1, -1, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, -1, 1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1]
];

let space = [
  ["Space", "Dust", "Dust", "Space", "Space", "Float", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Dust", "planet", "planet", "Dust", "Dust", "Float", "Float", "Float", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Float"],
  ["Dust", "planet", "planet", "Dust", "Space", "Space", "Float", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Float", "Float"],
  ["Space", "Space", "Dust", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Twinkle", "Space", "Space", "Space", "Float"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Twinkle", "Space", "Space", "Space", "Float", "Float"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Twinkle", "Twinkle", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Float", "Float", "Space", "Space", "Dust", "planet", "planet", "Dust", "Dust", "Twinkle", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Float", "Space", "Space", "Space", "Dust", "Dust", "planet", "Dust", "Dust", "Twinkle", "Space", "Space", "Float", "Space", "Space"],
  ["Space", "Float", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Dust", "Dust", "Twinkle", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Dust", "Dust", "Space", "Twinkle", "Twinkle", "Twinkle", "Space", "Space", "Space", "Dust", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Dust", "Dust", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Space"],
  ["Space", "Space", "Dust", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Twinkle", "Dust", "Dust", "Dust"],
  ["Space", "Space", "Space", "Space", "Space", "Float", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Space", "Float"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Space"]
];

let shooting = [
  ["Star", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Star", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Burn"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Burn", "Burn", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space", "Burn", "Space"],
  ["Space", "Space", "Burn", "Falling", "Space", "Space", "Space", "Star", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space", "Space"],
  ["Space", "Burn", "Falling", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Falling", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space"],
  ["Space", "Falling", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Falling", "Falling", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Star", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Falling", "Falling", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Falling", "Falling", "Star", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space"],
  ["Space", "Space", "Space", "Space", "Space", "Burn", "Burn", "Falling", "Falling", "Star", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Burn", "Burn", "Falling", "Falling", "Falling", "Star", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Burn", "Star", "Falling", "Star", "Star", "Star", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Burn", "Star", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Burn", "Star", "Star", "Star", "Star", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space", "Star", "Space", "Space", "Space", "Space", "Burn", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Space", "Burn", "Burn", "Burn", "Burn", "Burn", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space"]
];

// Casper's
let duck = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 5, 5, 5, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
]; 

let beak =[
   ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "duck", "duck", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "duck", "duck", "duck", "duck", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "eye", "duck", "duck", "eye", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "duck", "quack", "quack", "duck", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "quack", "quack", "quack", "quack", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "quack", "quack", "quack", "quack", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "quack", "quack", "quack", "quack", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "duck", "quack", "quack", "duck", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "duck", "quack", "quack", "duck", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "duck", "quack", "quack", "duck", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "duck", "duck", "duck", "duck", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"],
    ["sky", "sky", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "duck", "sky", "sky"]
   ];

let font1;

let galaxyImages = [];
let meteorImages = [];
let pikachuImages = [];
let oshawattImages = [];

function preload() {
// Planet imgs
  galaxyImages[1] = loadImage('assets/background.png');
  galaxyImages[2] = loadImage('assets/planet_blue.png');
  galaxyImages[3] = loadImage('assets/planet_green.png');
  galaxyImages[4] = loadImage('assets/planet_purple.png');
  galaxyImages[5] = loadImage('assets/planet_orange.png');

// Meteor imgs
  meteorImages[1] = loadImage('assets/background.png');
  meteorImages[2] = loadImage('assets/shooting_blue.png');
  meteorImages[3] = loadImage('assets/shooting_yellow.png');
  meteorImages[4] = loadImage('assets/shooting_purple.png');
  meteorImages[5] = loadImage('assets/star.png');
  
// Pikachu imgs
  pikachuImages[0] = loadImage('assets/indigo_hat.png');
  pikachuImages[1] = loadImage('assets/electroball.png');
  pikachuImages[2] = loadImage('assets/thunderbolt.png');
  pikachuImages[3] = loadImage('assets/pokeball.png');
  pikachuImages[4] = loadImage('assets/electrocuted.png');

//  Oshawatt imgs
  oshawattImages[0] = loadImage('assets/indigo_hat.png');
  oshawattImages[1] = loadImage('assets/electrocuted.png');
  oshawattImages[2] = loadImage('assets/indigo_hat.png');
  oshawattImages[3] = loadImage('assets/thunderbolt.png');
  oshawattImages[4] = loadImage('assets/electroball.png');
  oshawattImages[5] = loadImage('assets/oshawatt_blue.png');
  oshawattImages[6] = loadImage('assets/oshawatt.png');
  
}

// --- RENDERING FUNCTIONS ---
/////////////////////////////pixls
function mapCometPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    stroke(0,128,128, fade); // Dark border for neon look
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
        
            if (value == 1) fill(255, fade);                // White
            else if (value == 2) fill(0, 200, 255, fade);   // Cyan
            else if (value == 3) fill(120, 75, 255, fade);  // Purple
            else if (value == 4) fill(255, 0, 200, fade);   // Pink
            else if (value == 5) fill(110, 255, 0, fade);   // Neon Green
            else if (value == 6) fill(255, 223, 0, fade);   // Gold
            else noFill();

            if (value != 0) rect(j * 10, i * 10, 9, 9);
        }
    }
    pop();
}


function mapPlanetPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    stroke(100,50,250, fade); // Dark border for neon look
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
        
            if (value == 1) fill(255, fade);                // White
            else if (value == 2) fill(0, 200, 255, fade);   // Cyan
            else if (value == 3) fill(120, 75, 255, fade);  // Purple
            else if (value == 4) fill(255, 0, 200, fade);   // Pink
            else if (value == 5) fill(110, 255, 0, fade);   // Neon Green
            else if (value == 7) fill(45, 45, 70, fade);   // Gold
            else noFill();

            if (value != 0) rect(j * 10, i * 10, 9, 9);
        }
    }
    pop();
}

function mapStarPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    
    // Using a dark stroke to help the neon colors pop against the space background
    stroke(10,0,255, fade); 
    strokeWeight(0.8);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
            
            // Setting the color based on your established theme
            if (value == 1) fill(255, fade);                // White
            else if (value == 2) fill(120, 75, 255, fade);   // Purple
            else if (value == 4) fill(255, 0, 200, fade);   // Pink
            else if (value == 6) fill(255, 223, 0, fade);   // Gold
            else noFill();

            if (value != 0) {
                // Drawing as circles (ellipses)
                // We use j * 10 to space them, and + 5 to center the circle
                ellipse(j * 10 + 5, i * 10 + 5, 8, 8);
            }
        }
    }
    pop();
}

/////////////////////////////////imgs
function imgMeteor(arr, imgarr, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let a = arr[i][j];
      let nuimg = null;

      // Mapping array numbers to your preloaded images
      if (a === 0) {
        // Shading/Background inside the grid - using electroball (shading)
        nuimg = imgarr[1]; 
      } else if (a === 1) {
        // Outline/Ear tips - using electrocuted (black)
        nuimg = imgarr[2];
      } else if (a === 2) {
        // Eyes/Accents - using thunderbolt (yellow)
        nuimg = imgarr[3];
      } else if (a === 3) {
        // Cheeks/Hat - using indigo_hat
        nuimg = imgarr[4];
      } else if (a === 4) {
        // Main Body - using pokeball (red) or whichever you prefer
        nuimg = imgarr[5];
      } 
      // If a is -1, nuimg stays null and nothing is drawn

      if (nuimg) {
        image(nuimg, j * 15, i * 15, 14, 14);
      }
    }
  }
  pop();
}

function imgGalaxy(arr, imgarr, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let a = arr[i][j];
      let nuimg = null;

      // Mapping array numbers to your preloaded images
      if (a === 0) {
        // Shading/Background inside the grid - using electroball (shading)
        nuimg = imgarr[1]; 
      } else if (a === 1) {
        // Outline/Ear tips - using electrocuted (black)
        nuimg = imgarr[2];
      } else if (a === 2) {
        // Eyes/Accents - using thunderbolt (yellow)
        nuimg = imgarr[3];
      } else if (a === 3) {
        // Cheeks/Hat - using indigo_hat
        nuimg = imgarr[4];
      } else if (a === 4) {
        // Main Body - using pokeball (red) or whichever you prefer
        nuimg = imgarr[5];
      } 
      // If a is -1, nuimg stays null and nothing is drawn

      if (nuimg) {
        image(nuimg, j * 15, i * 15, 14, 14);
      }
    }
  }
  pop();
}

function imgPikachu(arr, imgarr, lx, ly, rot, sc,c) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  if (c) {
    tint();
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let a = arr[i][j];
      let nuimg = null;

      // Mapping array numbers to your preloaded images
      if (a === 0) {
        // electroball (shading)
        nuimg = imgarr[1]; 
      } else if (a === 1) {
        //  electrocuted (black)
        nuimg = imgarr[4];
      } else if (a === 2) {
        // thunderbolt (yellow)
        nuimg = imgarr[0];
      } else if (a === 3) {
        // indigo_hat (white)
        nuimg = imgarr[3];
      } else if (a === 4) {
        // pokeball (red)
        nuimg = imgarr[2];
      } 
      // If a is -1, nuimg stays null and nothing is drawn

      if (nuimg) {
        image(nuimg, j * 15, i * 15, 14, 14);
      }
    }
  }
  noTint();
  pop();
}

function imgOshawatt(arr, imgarr, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let a = arr[i][j];
      
      // Skip empty space (represented by -1 in your array)
      if (a === -1) continue;

      let nuimg = null;
      // Mapping based on your Oshawatt array logic
      if (a === 0) nuimg = imgarr[1]; 
      else if (a === 1) nuimg = imgarr[2];
      else if (a === 2) nuimg = imgarr[3];
      else if (a === 3) nuimg = imgarr[4];
      else if (a === 4) nuimg = imgarr[5];
      else if (a === 5 || a === 6) nuimg = imgarr[6];

      if (nuimg) {
        push();
        // 1. Base grid position (15px apart to keep the sprite solid)
        let x = j * 15;
        let y = i * 15;

        // 2. The "Fluid" movement
        // Using frameCount * 0.08 for speed
        // Adding 'i' and 'j' to the sine wave makes them move independently
        let moveX = sin(frameCount * 0.08 + i * 0.5) * 1.5;
        let moveY = cos(frameCount * 0.08 + j * 0.5) * 1.5;

        translate(x + moveX, y + moveY);

        // 3. Subtle individual rotation for a "floating" feel
        rotate(radians(sin(frameCount * 0.05 + (i+j)) * 3));

        // Draw the pixel
        image(nuimg, 0, 0, 14, 14);
        pop();
      }
    }
  }
  pop();
}

///////////////////////////////////////txt 
function mapSpaceText(arr, lx, ly, rot, sc, fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];

            // Your specific color mapping
            if (value === "Space") {
                fill(25, 25, 112, fade);     // Dark Blue
            } else if (value === "Dust") {
                fill(0, 200, 255, fade);    // Light Blue
            } else if (value === "planet") {
                fill(0, 255, 127, fade);    // Green
            } else if (value === "Twinkle") {
                fill(75, 0, 130, fade);     // Purple
            } else if (value === "Float") {
                fill(255, 0, 255, fade);    // Pink
            }

            text(value, j * 60, i * 25);
        }
    }
    pop();
}

function mapShootingText(arr, lx, ly, rot, sc, fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];

            // Your specific color mapping
            if (value === "Space") {
                fill(34,157,171, fade);     // teal
            } else if (value === "Star") {
                fill(255,215,0, fade);    // Gold
            } else if (value === "Burn") {
                fill(220,20,60, fade);    // Crimson
            } else if (value === "Falling") {
                fill(255, 0, 255, fade);     // Pink
            }

            text(value, j * 60, i * 25);
        }
    }
    pop();
}

////////////////////////// Casper //////////////////////////

function mapDuckPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    noStroke(); // Duck looks better without borders
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
            
            // Casper's color logic
            if (value == 5) fill(255, 255, 255, fade);      // Body (White)
            else if (value == 4) fill(0, fade);             // Eye (Black)
            else if (value == 2) fill(255, 150, 0, fade);   // Beak (Orange)
            else if (value == 6) fill(255, 100, 0, fade);   // Feet (Dark Orange)
            else if (value == 1) fill(200, 200, 255, fade); // Water (Light Blue)
            else if (value == 3) fill(0, 0, 100, fade);     // Deep Water
            else noFill();

            if (value != 0) rect(j * 10, i * 10, 9, 9);
        }
    }
    pop();
}

// Special function for the duck-shaped text array
function mapBeakText(arr, lx, ly, rot, sc, fade) {
    textSize(10);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
            if (value == "duck") fill(255, 255, 0, fade);
            else if (value == "quack") fill(255, 150, 0, fade);
            else if (value == "eye") fill(0, fade);
            else fill(100, 100, 255, fade * 0.3); // Faded blue for "beak"
            
            text(value, j * 30, i * 12);
        }
    }
    pop();
}


let pikX = 100;
let pikY = 100;
let pikDX = 3;  
let pikDY = 2;  
let pikScale = 0.8;
let pikaTheme = "standard"

function setup() {
    createCanvas(1000, 1000); 
}

function draw() {
    background(10, 20, 40);  

    if(page === 0) {
    push();
    translate(100, 150);
    fill(20,191,255);
    textAlign(LEFT);
    textSize(70);
    text("Grid Mapping", 0, 0);

    textSize(40);
    text("Page 1: Phase 1 grids", 0, 100);
    text("Page 2: New set", 0, 150);
    text("Page 3: Groupmates", 0, 200);
    text("Press: 1, 2, 3, and 0 for each page", 0, 280);
    pop();

    push();
    translate(250, 350);
    scale(2);
    mapCometPixels(comet, 150, 100, 0, 1.2, 255);
    pop();
    }

    if(page === 1){
    push();
    scale(1.5);
    mapCometPixels(comet, 450, 480, 0.5, 1, 255);
    pop();  

    push();
    mapPlanetPixels(planet, 680, 50, 0, 1.1, 255);
    pop(); 

    push();
    rotate(0.5);
    imgMeteor(meteor, meteorImages, 400, 400, -100, 0.6);
    pop();

    push();
    rotate(0.5);
    mapShootingText(shooting, 40, 150, -40, 0.8, 255);
    pop();

    push();
    rotate(0.5);
    imgGalaxy(galaxy, galaxyImages, 680, -10, -20, 1);
    pop();

    push();
    rotate(0.5);
    mapSpaceText(space, 300, 400, 0, 0.8, 255);
    pop();
    }

    if(page === 2){
    background(30,246,255, 170);

    push();
    mapStarPixels(star, 100, 30, 0, 1.7, 255);
    pop(); 

    push();
    translate(620, 200);
    imgPikachu(pikachu, pikachuImages, 0, 0, 20, 1.5);
    pop();
    
    push();
    translate(-72, 400);
    imgOshawatt(oshawatt, oshawattImages, 0, 0, 5, 1.5);
    pop();
    
    movePikachu();
    imgPikachu(pikachu, pikachuImages, pikX, pikY, -7, pikScale);

    }

    if(page === 3){
    background(0 , 255, 255, 230);
    mapDuckPixels(duck, 600, 670, 0, 2, 255);
    rotate(-0.3);
    mapBeakText(beak, -150, 250, 0.3, 2, 255);
    }
}

function movePikachu() {
  let actualWidth = pikachu[0].length * 15 * pikScale;
  let actualHeight = pikachu.length * 15 * pikScale;
  // 
  pikX += pikDX;
  pikY += pikDY;
  // Bounce off Right and Left
  if (pikX + actualWidth > width || pikX < 0) {
    pikDX *= -1;
  }
  // Bounce off Top and Bottom
  if (pikY + actualHeight > height || pikY < 0) {
    pikDY *= -1;
  }
}

function keyPressed(){
  if(key === '0') page = 0;  
  if(key === '1') page = 1;
  if(key === '2') page = 2;
  if(key === '3') page = 3;
}

