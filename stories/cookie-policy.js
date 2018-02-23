import { storiesOf } from '@storybook/vue'
import CookiePolicy from '@/components/cookie-policy'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Cookie Policy', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CookiePolicy :lang="lang" />`,
  data () {
    return {
      lang: select('Language', ['de', 'en'], 'de')
    }
  }
}), CookiePolicy)
