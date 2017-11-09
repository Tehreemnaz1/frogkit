const log = (title, ...args) => console.log('\n', title, '\n', ...args)
const logError = (...args) => log('ERROR!', ...args)
const workDir = process.cwd()

const path = require('path')
const fs = require('fs')
const optimiser = require('./optimiser')
const createComponent = require('./createComponent')
const createIndex = require('./createIndex')
const { promisify } = require('util')
const readdirAsync = promisify(fs.readdir)

let [, , inputPath, outputPath = inputPath] = process.argv

inputPath = path.resolve(workDir, inputPath)
outputPath = path.resolve(workDir, outputPath)

log('inputPath', inputPath)
log('outputPath', outputPath)

async function processIcons(inputPath, outputPath) {
  if (!fs.existsSync(inputPath)) throw new Error(`can't find path ${inputPath}`)

  const files = (await readdirAsync(inputPath)).filter(filename => /\.svg$/.test(filename))
  log('files', files)
  // files.forEach(async(filename) => createComponent(inputPath, filename))
  for (filename of files) await createComponent(filename, inputPath, outputPath)
  log('components created')

  await createIndex(files, outputPath)
  log('Done!')
}



processIcons(inputPath, outputPath).catch(e => {
  logError(e)
  process.exit(1)
})
