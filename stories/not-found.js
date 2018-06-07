import { storiesOf } from '@storybook/vue'
import NotFound from '@/components/not-found'
import { select } from '@storybook/addon-knobs'

const stories = storiesOf('404 not found', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<NotFound :lang="lang"/>`,
  data () {
    return {
      lang: select('Language', ['de', 'en'], 'de')
    }
  }
}), NotFound)