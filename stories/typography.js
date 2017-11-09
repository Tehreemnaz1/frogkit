import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

const stories = storiesOf('Typography', module)


stories.add('kitchen sink', () => ({
  template: `<FkText :size="size" :color="color" :weight="weight">
              {{slot}}
            </FkText>`,
  data(){
    return {
      slot: text('Text', 'Lorem ipsum dolorem sit amet aliquando'),
      size: select('Size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md'),
      color: select('Color', ['default', 'primary', 'light'], 'default'),
      weight: select('Weight', ['default', 'bold', 'slim'])
    }
  }
}))
