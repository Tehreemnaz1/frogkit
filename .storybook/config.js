import { configure, addDecorator, setAddon } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
addDecorator(withKnobs)

import { setOptions } from '@storybook/addon-options'
setOptions({
  name: 'Frogkit',
   url: '#'
})

import Vue from 'vue'
import '../src/stylus/main.styl'
import '../src/stylus/demo.styl'

// import and register all vue component inside components folder
const req = require.context('../src/components', false, /^\.\/.*\.vue$/)
req.keys().forEach(filename => {
  const component = req(filename).default
  Vue.component(component.name, component)
})

function loadStories() {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(req)

}

import { ComponentInfoDecorator } from './decorators'

setAddon({
  addCodeExampleStory(storyName, storyFn, component) {
    this.add(`${storyName} ⚡`, context => ComponentInfoDecorator(storyFn, component))
  }
})



configure(loadStories, module)
