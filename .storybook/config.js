import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
addDecorator(withKnobs)

import Vue from 'vue'

// import and register all vue component inside components folder
const req = require.context('../src/components', true, /^\.\/.*\.vue$/)
req.keys().forEach(filename => {
  const component = req(filename).default
  Vue.component(component.name, component)
})


function loadStories() {
  // const req = require.context('../src/components', true, /\.stories\.js$/)
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(req)

  // require('../stories')
}

configure(loadStories, module)
