import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, boolean } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'
import CouponPopup from '@/components/coupon-popup'

const stories = storiesOf('Coupon Popup', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <CouponPopup
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
    },
    onNoPromo() {
      alert(this.noText)
    }
  }
}), CouponPopup)
