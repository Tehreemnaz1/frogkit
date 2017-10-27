import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('button', module)


stories.add('default', () => ({
  template: `<fk-button @click="action" :disabled="disabled" :size="size" :block="block" :outline="outline" :color="color">
              {{slot}}
            </fk-button>`,
  methods: { action: action('button-click') },
  data() {
    return {
      slot: text('Text', 'click me'),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      outline: boolean('Outline', false),
      size: select('Size', ['small', 'normal', 'big'], 'normal'),
      color: select('Color', ['default', 'primary', 'secondary'], 'default')
    }
  }
}))
