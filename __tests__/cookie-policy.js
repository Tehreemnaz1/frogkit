import { mount } from 'vue-test-utils'
import Vue from 'vue'
import CookiePolicy from '@/components/cookie-policy'

describe('it should render and match snapShot', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(CookiePolicy)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('CookiePolicy should emit close event when close icon is clicked', () => {
    const stub = jest.fn()
    const wrapper = mount(CookiePolicy)
    wrapper.vm.$on('close', stub)
    wrapper.vm.$el.querySelector('.cookie-policy__close').click()
    expect(stub).toBeCalled()
  })
})