import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

const stories = storiesOf('Typography', module)


stories.add('kitchen sink', () => ({
  template: `<fk-text :size="size" :color="color" :weight="weight">
              {{slot}}
            </fk-text>`,
  data(){
    return {
      slot: text('Text', 'Lorem ipsum dolorem'),
      size: select('Size', ['size-50', 'size-38', 'size-30', 'size-25', 'size-15'], 'size-50'),
      color: select('Color', ['default', 'primary', 'light'], 'default'),
      weight: select('Weight', ['default', 'weight-700', 'weight-300'])
    }
  }
}))
