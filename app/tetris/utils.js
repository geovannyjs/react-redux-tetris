export const BOARD_ROWS = 34
export const BOARD_COLS = 20

export const copyArray2D = (p) => {
  var a = []
  for(var i = 0; i < p.length; i++) {
    a[i] = p[i].slice()
  }
  return a
}

export function createBlock(status = 0, color = "black") {
  return {
    status,   // 0 empty, 1 falling, 2 fixed, 3 for deletion
    color
  }
}

export function createLine(status = 0, color = "black") {
  var l = []
  for(var i = 0; i < BOARD_COLS; i++) {
    l[i] = createBlock(status, color)
  }
  return l
}

export function emptyBoard() {
  var b = [];
  for(var i = 0; i < BOARD_ROWS; i++) {
    b[i] = createLine()
  }
  return b
}

export const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const rotateCoordinates = (cx, cy, x, y, angle = 90) => {
  var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
    ny = (cos * (y - cy)) - (sin * (x - cx)) + cy

  return [Math.round(nx), Math.round(ny)]
}
