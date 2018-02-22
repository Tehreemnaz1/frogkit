import { mount } from 'vue-test-utils'
import Vue from 'vue'
import LegacyBrowser from '@/components/legacy-browser'

describe('Dark Layer', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(LegacyBrowser)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
