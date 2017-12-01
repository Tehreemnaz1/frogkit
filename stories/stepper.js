import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select, number } from '@storybook/addon-knobs'

import Stepper from '@/components/stepper'

const stories = storiesOf('Stepper', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<Stepper :count="count" :active="active" :big="big" />`,
  data() {
    return {
      count: number('Count', 3, { min: 1, max: 12, step: 1, }),
      active: number('Active', 2, { min: 1, max: 12, step: 1, }),
      big: boolean('Big', false)
    }
  }
}))

stories.addCodeExampleStory('Default', () => ({
  template: `<Stepper />`
}))

stories.addCodeExampleStory('Big Status Step', () => ({
  template: `<Stepper big />`
}))
