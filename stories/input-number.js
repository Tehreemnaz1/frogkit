import { storiesOf } from '@storybook/vue'
import { number, select, boolean } from '@storybook/addon-knobs'

import inputNumber from '@/components/input-number'

const stories = storiesOf('Input Number', module)


stories.addCodeExampleStory('kitchen sink', () => ({
  template:
  `<div><Input-Number :min="min" :max="max" v-model="value" :size="size" />
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