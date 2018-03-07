import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import ShareIcons from '@/components/social-share-icon'

const stories = storiesOf('Social Sharing Icon', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div><ShareIcons :url="url" facebook twitter gplus/></div>`,
  data () {
    return {
      url: text('Shared Page','https://www.smartfrog.com/de-de/ebooks/kindersicherheit/')
    }
  }
}), ShareIcons)
