import { storiesOf } from '@storybook/vue'
import FootNote from '@/components/foot-note'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Foot Note', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<FootNote>
            <template v-html="slot"></template>
            </FootNote>`,
  data () {
    return {
      slot: text('html content', 'No deposit, no set-up fees, no shipping cost. within the first 24 will need to return the Smartfrog Cam to us by page and access to the last 24 hours of your recorded videos. <a>Our Terms of Service apply.</a>')
    }
  }
}), FootNote)