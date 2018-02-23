import { mount } from 'vue-test-utils'
import Vue from 'vue'
import LegacyBrowser from '@/components/legacy-browser'

describe('Legacy Browser', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(LegacyBrowser)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should not emit click event', () => {
    const stub = jest.fn()
    const wrapper = mount(LegacyBrowser)
      wrapper.vm.$on('click', stub)
      wrapper.vm.$el.querySelector('.legacy-browser').click()
      expect(stub).not.toBeCalled()
  })
})
