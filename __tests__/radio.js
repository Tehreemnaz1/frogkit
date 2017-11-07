import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Radio from '@/components/radio'

describe('Radio button component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Radio)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render disabled radio button', () => {
    const wrapper = mount(Radio, { propsData: { disabled: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render checked radio button', () => {
    const wrapper = mount(Radio, { propsData: { checked: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

})
