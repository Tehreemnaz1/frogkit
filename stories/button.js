import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Button', module)

const iconsList = [
  'angle-down',
  'angle-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'check-mark-bold',
  'check-mark',
  'credit-card',
  'lastschrift',
  'phone',
  'plus',
  'print'
]


stories.add('Kitchen Sink', () => ({
  template: `<Button @click="action" :link="link" :disabled="disabled" :size="size" :block="block" :outline="outline" :color="color">
              {{slot}}
            </Button>`,
  methods: { action: action('button-click') },
  data() {
    return {
      slot: text('Text', 'click me'),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      outline: boolean('Outline', false),
      link: boolean('Link', false),
      size: select('Size', ['small', 'normal', 'big'], 'normal'),
      color: select('Color', ['default', 'primary', 'secondary'], 'default')
    }
  }
}))


stories.add('Link as a button', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :outline="outline" :color="color" :href="href" target="_blank">
              {{slot}}
            </Button>`,
  data(){
    return {
      slot: text('Text', 'Jetzt bestellen'),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      outline: boolean('Outline', false),
      href: text('href', '//smartfrog.com'),
      size: select('Size', ['small', 'normal', 'big'], 'normal'),
      color: select('Color', ['default', 'primary', 'secondary'], 'primary')
    }
  }
}))

stories.add('Button with icon on the left', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :outline="outline" :color="color">
              <Icon :icon="icon" :size="size"/>
              <span>{{slot}}</span>
            </Button>`,
  data(){
    return {
      icon: select('Icon', iconsList, 'print'),
      slot: text('Text', 'Jetzt bestellen'),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      outline: boolean('Outline', false),
      size: select('Size', ['small', 'normal', 'big'], 'normal'),
      color: select('Color', ['default', 'primary', 'secondary'], 'primary')
    }
  }
}))

stories.add('Button with icon on the right', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :outline="outline" :color="color">
              <span>{{slot}}</span>
              <Icon :icon="icon" />
            </Button>`,
  data(){
    return {
      icon: select('Icon', iconsList, 'print'),
      slot: text('Text', 'Jetzt bestellen'),
      disabled: boolean('Disabled', false),
      block: boolean('Full Width', false),
      outline: boolean('Outline', false),
      size: select('Size', ['small', 'normal', 'big'], 'normal'),
      color: select('Color', ['default', 'primary', 'secondary'], 'primary')
    }
  }
}))
