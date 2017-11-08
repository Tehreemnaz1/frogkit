import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
addDecorator(withKnobs)

import Vue from 'vue'
import '../src/stylus/main.styl'
import '../src/stylus/demo.styl'

// const like = require('../src/components/example.vue')
// Vue.component('like', like)

// import and register all vue component inside components folder
const req = require.context('../src/components', false, /^\.\/.*\.vue$/)
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

require.context('../src', true)

configure(loadStories, module)
