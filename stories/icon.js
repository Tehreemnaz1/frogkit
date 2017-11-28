import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import icons from '@/components/icons'
import Icon from '@/components/icon'


const iconsList = Object.keys(icons)

const stories = storiesOf('Icon', module)

stories.addCodeExampleStory('kitchen sink', () => ({
  template: `
  <Flex align="start">
    <Flex column align="center" class="icon-demo" v-for="icon in icons" :key="icon">
      <Icon :icon="icon" :color="color" :size="size"/>
      <span>{{icon}}</span>
    </Flex>
  </Flex>
  `,
  methods: { action: action('button-click') },
  data() {
    return {
      icons: iconsList,
      color: select('Color', ['', 'orange', 'blue', 'red', 'grey'], ''),
      size: select('Size', ['default', 'big', 'small'], 'big'),
    }
  },
}), Icon)
