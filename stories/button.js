import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Button from '@/components/button'

import icons from '@/components/icons'
const iconsList = Object.keys(icons)

const stories = storiesOf('Button', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<Button @click="action" :link="link" :disabled="disabled" :size="size" :cut-side="cutSide" :block="block" :outline="outline" :color="color">
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
      color: select('Color', ['default', 'primary', 'secondary'], 'default'),
      cutSide: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}), Button)


stories.addCodeExampleStory('Link as a button', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :outline="outline" :cut-side="cutSide" :color="color" :href="href" target="_blank">
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
      color: select('Color', ['default', 'primary', 'secondary'], 'primary'),
      cutSide: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}))

stories.addCodeExampleStory('Button with icon on the left', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :cut-side="cutSide" :outline="outline" :color="color">
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
      color: select('Color', ['default', 'primary', 'secondary'], 'primary'),
      cutSide: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}))

stories.addCodeExampleStory('Button with icon on the right', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :cut-side="cutSide" :outline="outline" :color="color">
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
      color: select('Color', ['default', 'primary', 'secondary'], 'primary'),
      cutSide: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}))
