const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const optimiser = require('./optimiser')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

async function createIndex(files, outputPath) {
  // console.log(files)
  const list = files.map(filename => filename.replace('.svg', ''))
  const indexContent = indexTemplate(list)
  const writePath = path.resolve(outputPath, 'index.js')
  await writeFileAsync(writePath, indexContent)
}

function indexTemplate(list) {
  return `import Vue from 'vue'
${list.map(i => `Vue.component('${i}', () => import('./${i}.vue'))`).join('\n')}
  `
}

module.exports = createIndex
