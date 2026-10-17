
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

let space = [
  ["Space", "Dust", "Dust", "Space", "Space", "Float", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Dust", "Meteor", "Meteor", "Dust", "Dust", "Float", "Float", "Float", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Float"],
  ["Dust", "Meteor", "Meteor", "Dust", "Space", "Space", "Float", "Space", "Space", "Space", "Space", "Space", "Dust", "Space", "Space", "Float", "Float"],
  ["Space", "Space", "Dust", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Twinkle", "Space", "Space", "Space", "Float"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Twinkle", "Space", "Space", "Space", "Float", "Float"],
  ["Space", "Space", "Space", "Space", "Space", "Space", "Dust", "Dust", "Dust", "Twinkle", "Twinkle", "Space", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Float", "Float", "Space", "Space", "Dust", "Meteor", "Meteor", "Dust", "Dust", "Twinkle", "Space", "Space", "Space", "Space", "Space"],
  ["Space", "Space", "Float", "Space", "Space", "Space", "Dust", "Dust", "Meteor", "Dust", "Dust", "Twinkle", "Space", "Space", "Float", "Space", "Space"],
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

let font1;
let galaxyImages = [];
let meteorImages = [];


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

}


// --- RENDERING FUNCTIONS ---
////////////////////////// Mine //////////////////////////
function mapCometPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    stroke(0, fade); // Dark border for neon look
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

/////////////////////////////////////////
function mapPlanetPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    stroke(0, fade); // Dark border for neon look
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
            } else if (value === "Meteor") {
                fill(0, 255, 127, fade);    // Green
            } else if (value === "Twinkle") {
                fill(75, 0, 130, fade);     // Purple
            } else if (value === "Float") {
                fill(255, 0, 255, fade);    // Pink
            }
1
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

function setup() {
    createCanvas(1000, 1000); 
    background(10, 20, 40);  

    push();
    translate(0, 0);
    scale(1.5);
    mapCometPixels(comet, 450, 480, 0.5, 1, 200);
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
    imgGalaxy(galaxy, galaxyImages, 680, -0.5, -20, 1);
    pop();

    push();
    rotate(0.5);
    mapSpaceText(space, 300, 400, 0, 0.8, 255);
    pop();


}

