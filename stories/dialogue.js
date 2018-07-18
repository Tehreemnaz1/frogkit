import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'

const stories = storiesOf('Dialogue', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <Dialogue :visible="visible" :dark="dark" :requireAction="requireAction">
      <h1 class="demo-title">Hello</h1>
    </Dialogue>
  `,
  data() {
    return {
      visible: boolean('Visible', true),
      dark: boolean('Dark', true),
      requireAction: boolean('Require Action', false)
    }
  }
}), Dialogue)
