import {
  mount,
  shallow
} from 'vue-test-utils'
import Vue from 'vue'
import Dialogue from '@/components/dialogue'
import CouponPopup from '@/components/coupon-popup'

const propsData = {
  visible: true,
  config: {
    title: 'Hiergeblieben!',
    headline: 'Smartfrog schenkt dir den ersten Monat!',
    label: 'Gutscheincode:',
    code: 'FREE1',
    accept: 'Jetzt einlösen',
    reject: 'Jetzt nicht'
  }

}

describe('Coupon Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(CouponPopup, {
      propsData
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit change event when close method is called', () => {
    const cmp = shallow(CouponPopup, {
      propsData
    })
    const stub = jest.fn()
    cmp.vm.$on('change', stub)
    cmp.vm.close()
    expect(stub).toBeCalled()
  })

  it('Should emit proceed event when proceed method is called', () => {
    const cmp = shallow(CouponPopup, {
      propsData
    })
    const stub = jest.fn()
    cmp.vm.$on('proceed', stub)
    cmp.vm.proceed()
    expect(stub).toBeCalled()
  })
})