import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Dialogue from '@/components/input'

const stories = storiesOf('Dialogue', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <Dialogue :show="show" :dark="dark" :requireAction="requireAction">
      <h1 class="demo-title">Hello</h1>
    </Dialogue>
  `,
  data() {
    return {
      show: boolean('Show', true),
      dark: boolean('Dark', false),
      requireAction: boolean('Require Action', false)
    }
  }
}), Dialogue)
