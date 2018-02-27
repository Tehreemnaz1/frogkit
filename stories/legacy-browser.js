import { storiesOf } from '@storybook/vue'
import LegacyBrowser from '@/components/legacy-browser'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Legacy Browser', module)

stories.addCodeExampleStory('Demo', () => ({
  template: ` 
        <div class="dark-bg">
        <LegacyBrowser :show="show" @click="show = false" :title="title" :content="content" :linkLabel="linkLabel"/>
        </div>`,
  data () {
    return {
      title: 'Browser nicht unterstützt',
      content: 'Für die Nutzung von Smartfrog wird ein moderner Browser benötigt.<br>Wir empfehlen den Chrome Browser in aktueller Version für beste Ergebnisse.',
      linkLabel: 'Chrome herunterladen',
      show: true
    }
  }
}), LegacyBrowser)