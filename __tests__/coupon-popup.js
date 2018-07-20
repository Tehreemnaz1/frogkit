import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import Dialogue from '@/components/dialogue'
import CouponPopup from '@/components/coupon-popup'

const propsData = {
  visible: true,
  dark: true,
  requiredAction: false,
  lang: 'de',
  title: 'Hiergeblieben!',
  text: 'Smartfrog schenkt dir den ersten Monat!',
  codeText: 'Gutscheincode:',
  code: 'FREE1',
  btnText: 'Jetzt einlösen',
  noText: 'Jetzt nicht'
}

describe('Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(CouponPopup, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
