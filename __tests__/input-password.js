import { mount } from 'vue-test-utils'
import Vue from 'vue'
import InputPassword from '@/components/input-password'

describe('Input password component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should toggle input type', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.vm.inputType).toBe('password')
    const icon = wrapper.vm.$el.getElementsByClassName('fk-input-password__img')[0]
    icon.click()
    expect(wrapper.vm.inputType).toBe('text')
    icon.click()
    expect(wrapper.vm.inputType).toBe('password')
  })

})