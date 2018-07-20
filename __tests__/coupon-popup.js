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

describe('Coupon Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(CouponPopup, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit change event when close method is called', () => {
    const cmp = shallow(CouponPopup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('change', stub)
    cmp.vm.close()
    expect(stub).toBeCalled()
  })

  it('Should emit usePromo event when usePromo method is called', () => {
    const cmp = shallow(CouponPopup, { propsData })
    const stub = jest.fn()
    cmp.vm.$on('usePromo', stub)
    cmp.vm.usePromo()
    expect(stub).toBeCalled()
  })
})
