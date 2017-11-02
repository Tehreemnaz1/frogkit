import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select, number } from '@storybook/addon-knobs'

const stories = storiesOf('Stepper', module)


stories.add('Kitchen Sink', () => ({
  template: `<Stepper :count="count" :active="active" :big="big" />`,
  data() {
    return {
      count: number('Count', 3, { min: 1, max: 12, step: 1, }),
      active: number('Active', 2, { min: 1, max: 12, step: 1, }),
      big: boolean('Big', false)
    }
  }
}))

stories.add('Default', () => ({
  template: `<Stepper />`
}))

stories.add('Big Status Step', () => ({
  template: `<Stepper big />`
}))
