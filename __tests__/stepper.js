import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Stepper from '@/components/stepper'

describe('Stepper component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Stepper, {})
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with all props', () => {
    const wrapper = mount(Stepper, { propsData: { count: 3, active: 2, big: false } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render big step', () => {
    const wrapper = mount(Stepper, { propsData: { big: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })


})
