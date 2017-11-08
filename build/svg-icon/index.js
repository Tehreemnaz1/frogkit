const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const Svgo = require('svgo')
const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const svgo = new Svgo({
  plugins: [{
    addAttributesToSVGElement: {
      attributes: [`v-bind="props"`, `:class="[data.staticClass, data.class]"`]
    },
    // NOTE we need to move this to another Svgo instance
    // removeAttrs: {
    //   attrs: ['xmlns']
    // }
  }]
})

const workDir = process.cwd()

let [, , inputPath, outputPath = inputPath] = process.argv

inputPath = path.resolve(workDir, inputPath)
outputPath = path.resolve(workDir, outputPath)

console.log(inputPath, outputPath)

async function findAll(startPath) {
  if (!fs.existsSync(startPath)) {
    console.log('ERROR finding ', startPath)
    return
  }

  const files = (await readdirAsync(startPath)).filter(filename => /\.svg$/.test(filename))
  files.forEach(async(filename) => await createComponent(startPath, filename))
  await createIndex(files)
  console.log(files)
  console.log('Done!')
}

async function createComponent(folder, filename) {
  const filePath = path.resolve(folder, filename)
  const result = await svgo.optimize(await readFileAsync(filePath))
  const componentContent = componentTemplate(result.data)
  const writePath = path.resolve(outputPath, filename.replace('.svg', '.vue'))
  await writeFileAsync(writePath, componentContent)
}

async function createIndex(files) {
  // console.log(files)
  const list = files.map(filename => filename.replace('.svg', ''))
  const indexContent = indexTemplate(list)
  const writePath = path.resolve(outputPath, 'index.js')
  await writeFileAsync(writePath, indexContent)
}


findAll(inputPath)

function componentTemplate(content) {
  // const include = `:class="data.staticClass"`
  return `<template functional>${content}</template>`
  // return `<template>${content}</template>`
}

function indexTemplate(list) {
  return `import Vue from 'vue'
${list.map(i => `Vue.component('${i}', () => import('./${i}.vue'))`).join('\n')}
  `
}
