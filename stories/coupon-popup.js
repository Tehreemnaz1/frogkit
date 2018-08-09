import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import {
  text,
  select,
  boolean
} from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'
import CouponPopup from '@/components/coupon-popup'

const stories = storiesOf('Coupon Popup', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `
    <CouponPopup v-model="visible" :config="config" />
  `,
  data() {
    return {
      visible: boolean('Visible', true),
      config: {
        title: text('Title', 'Hiergeblieben!'),
        image: select('Image', [require('@demo/popup/gift.svg'), require('@demo/popup/geschenk.svg')], require('@demo/popup/gift.svg')),
        headline: text('Headline', 'Smartfrog schenkt dir den ersten Monat!'),
        label: text('Voucher label', 'Gutscheincode:'),
        code: text('Voucher code', 'FREE1'),
        accept: text('Accept Label', 'Jetzt einlösen'),
        reject: text('Reject Label', 'Jetzt nicht'),
      }
    }
  }
}), CouponPopup)