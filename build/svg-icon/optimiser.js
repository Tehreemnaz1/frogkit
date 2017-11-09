const Svgo = require('svgo')

const clean = new Svgo({
  // full: true,
  // js2svg: {
  //   pretty: true,
  //   indent: '  '
  // },
  plugins: [{
      mergePaths: {}
    },
    {
      transformsWithOnePath: {}
    },
    {
      removeTitle: {}
    },
    {
      removeXMLNS: {}
    },
    {
      removeDimensions: {}
    },
    {
      sortAttrs: {}
    },
    {
      removeStyleElement: {}
    },
    {
      removeScriptElement: {}
    },
    {
      removeViewBox: false
    },
    {
      removeAttrs: {
        attrs: ['xmlns', 'stroke', 'fill', 'style', 'xmlns:xlink']
      }
    }
  ]
})

const arrange = new Svgo({
  plugins: [{
    addAttributesToSVGElement: {
      attributes: [`v-bind="props"`, `:class="[data.staticClass, data.class]"`]
    }
  }]
})

async function main(content) {
  const cleaned = await clean.optimize(content)
  const arranged = await arrange.optimize(cleaned.data)
  return arranged.data
}

module.exports = main
