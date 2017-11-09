import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number } from '@storybook/addon-knobs'

const stories = storiesOf('Title', module)


stories.add('kitchen sink', () => ({
  template: `<Title :size="size" :color="color" :weight="weight">
              {{slot}}
            </Title>`,
  data(){
    return {
      slot: text('Text', 'Lorem ipsum dolorem'),
      size: select('Size', ['larger', 'xx-small', '100px', '8px', 'xl', 'lg', 'md', 'sm', 'xs'], 'md'),
      color: select('Color', ['default', 'primary', 'light'], 'primary'),
      weight: select('Weight', ['default', 'bold', 'slim'])
    }
  }
}))

stories.add('Custom size (type number)', () => ({
  template: `<Title :size="size" :color="color" :weight="weight">
              {{slot}}
            </Title>`,
  data(){
    return {
      slot: text('Text', 'Lorem ipsum dolorem'),
      size: number('Size', 1),
      color: select('Color', ['default', 'primary', 'light'], 'primary'),
      weight: select('Weight', ['default', 'bold', 'slim'])
    }
  }
}))
