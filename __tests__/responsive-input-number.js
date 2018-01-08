import { mount } from 'vue-test-utils'
import Vue from 'vue'
import ResponsiveInputNumber from '@/components/responsive-input-number'

describe('Input component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(ResponsiveInputNumber)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
