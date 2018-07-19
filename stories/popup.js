import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, boolean } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'
import Popup from '@/components/popup'

const stories = storiesOf('Coupon Popup', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <Popup
      :lang="lang"
      :title="title"
      :text="text"
      :codeText="codeText"
      :code="code"
      :btnText="btnText"
      :noText="noText"
      @usePromo="onUsePromo"
      @noPromo="onNoPromo" />
  `,
  data() {
    return {
      lang: select('lang', ['de', 'en'], 'de'),
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
    },
    onNoPromo() {
      alert(this.noText)
    }
  }
}), Popup)

stories.addCodeExampleStory('In context demo', () => ({
  template:
  `
    <Dialogue :visible="visible" :dark="dark">
      <Popup
        :lang="lang"
        :title="title"
        :text="text"
        :codeText="codeText"
        :code="code"
        :btnText="btnText"
        :noText="noText"
        @usePromo="onUsePromo"
        @noPromo="onNoPromo" />
    </Dialogue>
  `,
  data() {
    return {
      visible: true,
      dark: true,
      lang: select('lang', ['de', 'en'], 'en'),
      title: text('Title', 'Don’t go!'),
      text: text('Text', 'The first month is on us.'),
      codeText: text('Coupon code label', 'Voucher code:'),
      code: text('Coupon code', 'FREE1'),
      btnText: text('Button Label', 'Redeem now'),
      noText: text('Close Label', 'Jetzt nicht')
    }
  },
  methods: {
    onUsePromo(code) {
      alert(`Voucher code: ${code}`)
    },
    onNoPromo() {
      alert(this.noText)
    }
  }
}), Popup)
