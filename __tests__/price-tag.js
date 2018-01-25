import { mount } from 'vue-test-utils'
import Vue from 'vue'
import PriceTag from '@/components/price-tag'

describe('Price Tag component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(PriceTag, {propsData: {value: '9.59', code: 'EUR' }})
    expect(wrapper.html()).toMatchSnapshot()
  })

})