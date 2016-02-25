import {createBlock, getRandomIntInclusive} from './utils.js'

/*

THe central coordinate for rotation must be the first element in all elements

*/

export const pieceLetterI = (color = "cyan") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([0, 0, createBlock(1, color)])
  p.push([0, 2, createBlock(1, color)])
  p.push([0, 3, createBlock(1, color)])
  return p
}

export const pieceLetterJ = (color = "pink") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([0, 0, createBlock(1, color)])
  p.push([0, 2, createBlock(1, color)])
  p.push([1, 2, createBlock(1, color)])
  return p
}

export const pieceLetterL = (color = "orange") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([0, 0, createBlock(1, color)])
  p.push([0, 2, createBlock(1, color)])
  p.push([1, 0, createBlock(1, color)])
  return p
}

export const pieceLetterO = (color = "yellow") => {
  var p = []
  p.push([0, 0, createBlock(1, color)])
  p.push([0, 1, createBlock(1, color)])
  p.push([1, 0, createBlock(1, color)])
  p.push([1, 1, createBlock(1, color)])
  return p
}

export const pieceLetterS = (color = "red") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([1, 0, createBlock(1, color)])
  p.push([1, 1, createBlock(1, color)])
  p.push([0, 2, createBlock(1, color)])
  return p
}

export const pieceLetterT = (color = "purple") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([0, 0, createBlock(1, color)])
  p.push([0, 2, createBlock(1, color)])
  p.push([1, 1, createBlock(1, color)])
  return p
}

export const pieceLetterZ = (color = "green") => {
  var p = []
  p.push([0, 1, createBlock(1, color)])
  p.push([0, 0, createBlock(1, color)])
  p.push([1, 1, createBlock(1, color)])
  p.push([1, 2, createBlock(1, color)])
  return p
}

export const newRandomPiece = () => {
  var f = [pieceLetterI, pieceLetterJ, pieceLetterL, pieceLetterO, pieceLetterS, pieceLetterT, pieceLetterZ]
  return f[getRandomIntInclusive(0, 6)]()
}
