import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

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
      :codeLabel="codeLabel"
      :code="code"
      :btnLabel="btnLabel"
      :noVoucherLabel="noVoucherLabel"
      @useVoucher="onUseVoucher"
      @noVoucher="onDismiss" />
  `,
  data() {
    return {
      lang: select('lang', ['de', 'en'], 'de'),
      title: text('Title', 'Hiergeblieben!'),
      text: text('Text', 'Smartfrog schenkt dir den ersten Monat!'),
      codeLabel: text('Coupon code label', 'Gutscheincode:'),
      code: text('Coupon code', 'FREE1'),
      btnLabel: text('Button Label', 'Jetzt einlösen'),
      noVoucherLabel: text('Close Label', 'Jetzt nicht')
    }
  },
  methods: {
    onUseVoucher(code) {
      alert(`Voucher code: ${code}`)
    },
    onDismiss() {
      alert(this.noVoucherLabel)
    }
  }
}), Popup)
