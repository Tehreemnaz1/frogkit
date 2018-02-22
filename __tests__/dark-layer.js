import { mount } from 'vue-test-utils'
import Vue from 'vue'
import DarkLayer from '@/components/dark-layer'

describe('Dark Layer', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(DarkLayer)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Dark Layer should emit click event when clicked', () => {
    const stub = jest.fn()
    const wrapper = mount(DarkLayer)
    wrapper.vm.$on('click', stub)
    wrapper.trigger('click')
    expect(stub).toBeCalled()
  })
})
