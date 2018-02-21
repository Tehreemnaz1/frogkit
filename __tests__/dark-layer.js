import { mount } from 'vue-test-utils'
import Vue from 'vue'
import DarkLayer from '@/components/dark-layer'

describe('Dark Layer', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(DarkLayer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
