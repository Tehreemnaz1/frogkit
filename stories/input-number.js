import { storiesOf } from '@storybook/vue'
import { number, select, boolean } from '@storybook/addon-knobs'

import inputNumber from '@/components/input-number'
import responsiveInputNumber from '@/components/responsive-input-number'

const stories = storiesOf('Input Number', module)


stories.addCodeExampleStory('mobile view', () => ({
  template:
  `<div><input-number :min="min" :max="max" v-model="value" :size="size" />
  <br/><span>Value: {{value}}</span></div>`,
  data() {
    return {
      min: number('Min', 1, { min: 1, max: 11, step: 1, }),
      max: number('Max', 5, { min: 2, max: 12, step: 1, }),
      value: number('Value', 3),
      size: select('Size', ['small', 'big'], 'small')
    }
  }
}), inputNumber)

stories.addCodeExampleStory('responsive view', () => ({
  template:
  `<div><responsive-input-number :min="min" :max="max" v-model="value" :size="size" />
  <br/><span>Value: {{value}}</span></div>`,
  data() {
    return {
      min: number('Min', 1, { min: 1, max: 11, step: 1, }),
      max: number('Max', 5, { min: 2, max: 12, step: 1, }),
      value: number('Value', 3),
      size: select('Size', ['small', 'big'], 'small')
    }
  }
}), responsiveInputNumber)