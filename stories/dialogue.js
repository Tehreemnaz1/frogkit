import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'

const stories = storiesOf('Dialogue', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <Dialogue
      :visible="visible"
      :dark="dark"
      :requireAction="requireAction"
      :lang="lang"
      :title="title"
      :text="text"
      :codeText="codeText"
      :code="code"
      :btnText="btnText"
      :noText="noText"
      @usePromo="onUsePromo" />
  `,
  data() {
    return {
      visible: boolean('Visible', true),
      dark: boolean('Dark', true),
      requireAction: boolean('Require Action', false),
      lang: select('Language', ['de', 'en'], 'de'),
      title: text('Title', 'Hiergeblieben!'),
      text: text('Text', 'Smartfrog schenkt dir den ersten Monat!'),
      codeText: text('Coupon code label', 'Gutscheincode:'),
      code: text('Coupon code', 'FREE1'),
      btnText: text('Button Label', 'Jetzt einlösen'),
      noText: text('Close Label', 'Jetzt nicht')
    }
  },
  methods: {
    onUsePromo(code) {
      alert(`Voucher code: ${code}`)
    }
  }
}), Dialogue)
