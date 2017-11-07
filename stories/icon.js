import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Icon', module)

stories.add('kitchen sink', () => ({
  template: '<Icon @click="action" :title="title"/>',
  methods: { action: action('button-click') },
  data() {
    return {
      title: text('title', 'click me'),
    }
  },
}))
