import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

const iconsList = [
    'angle-down',
    'angle-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'basket',
    'bell',
    'checkmark',
    'close',
    'coupon',
    'credit-card',
    'exclamation-circle',
    'exclamation',
    'eye-open',
    'facebook',
    'film-play',
    'google-plus',
    'info-circle',
    'info',
    'instagram',
    'mail',
    'hamburger-menu',
    'mic',
    'night-vision',
    'phone',
    'plus',
    'print',
    'reload',
    'shopping-cart-outline',
    'signing',
    'ssl',
    'tick-sign-circle',
    'tick-sign',
    'timelapse',
    'twitter',
    'youtube',
    'zoom'
]

const stories = storiesOf('Icon', module)

stories.add('kitchen sink', () => ({
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
}))
