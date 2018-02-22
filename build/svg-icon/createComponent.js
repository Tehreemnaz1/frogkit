const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const optimiser = require('./optimiser')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

async function createComponent(filename, inputPath, outputPath) {
  const filePath = path.resolve(inputPath, filename)
  const fileContent = await readFileAsync(filePath)
  const content = await optimiser(fileContent)
  if (!content) throw new Error(`produced content is invalid`)
  const componentContent = componentTemplate(content)
  const writePath = path.resolve(outputPath, filename.replace('.svg', '.vue'))
  await writeFileAsync(writePath, componentContent)
}

function componentTemplate(content) {
  // return `<template functional>${content}</template>`
  return `<template>${content}</template>`
}

module.exports = createComponent
