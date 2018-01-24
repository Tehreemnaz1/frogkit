import { storiesOf } from '@storybook/vue'
import SslBadge from '@/components/ssl-badge'
import { text } from '@storybook/addon-knobs'


const stories = storiesOf('Ssl Badge', module)


stories.addCodeExampleStory('Demo', () => ({
  template: `<SslBadge :text="text" />`,
  data () {
    return {
      text: text('Text', 'Some long text goes here')
    }
  }
}), SslBadge)

