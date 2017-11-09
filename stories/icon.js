import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

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

const stories = storiesOf('Icon', module)

stories.add('kitchen sink', () => ({
  template: `
  <Flex align="start">
    <Flex column align="center" class="icon-demo" v-for="icon in icons" :key="icon">
      <Icon :icon="icon" :color="color" class="big"/>
      <span>{{icon}}</span>
    </Flex>
  </Flex>
  `,
  methods: { action: action('button-click') },
  data() {
    return {
      icons: iconsList,
      color: select('Color', ['', 'orange', 'blue', 'red', 'grey'], ''),
    }
  },
}))
