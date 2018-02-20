import { mount, shallow } from 'vue-test-utils'
import Vue from 'vue'
import InputToolTip from '@/components/input-tooltip'
import Input from '@/components/input'

const propsData = {
  title: 'Password must have:',
  conditions: {'min': 'min 6 chars', 'max': 'max 64 chars'},
  status: 'warning',
  statusTxt: 'weak password',
  value: ''
}

describe('Input Tooltip component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'password'}), propsData})
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('Input Tooltip should validate input', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'password'}), propsData,  mocks: {__test__: true }})
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('Input Tooltip component with shown tooltip', () => {
  it('Should validate password', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'password', value: ''}), propsData,  mocks: {__test__: true }})
    const input = wrapper.find(Input)
    // Short password (< 6 chars)
    input.setProps({ value: 'test' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['min']).toBe('input-tooltip__content--invalid')
    // Accepted password
    input.setProps({ value: 'testtest' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['min']).toBe('')
    // Long password (> 64 chars)
    input.setProps({ value: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['max']).toBe('input-tooltip__content--invalid')
  })

  it('Should calculate correct password score', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'password', value: ''}), propsData,  mocks: {__test__: true }})
    const input = wrapper.find(Input)
    // Weak password
    input.setProps({ value: 'test' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.status).toBe('danger')
    // Meduim level password
    input.setProps({ value: 'testTest' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.status).toBe('warning')
    // Strong Password
    input.setProps({ value: 'testTest1#' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.status).toBe('success')
  })

  it('Should validate email', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'email', value: ''}), propsData,  mocks: {__test__: true }})
    const input = wrapper.find(Input)
    // Invalid email
    input.setProps({ value: 'test@test' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['valid']).toBe('input-tooltip__content--invalid')
    // Valid email
    input.setProps({ value: 'test@test.de' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['valid']).toBe('input-tooltip__content--valid')
  })
  it('Should validate phone number', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot(Input, {type: 'phone', value: ''}), propsData,  mocks: {__test__: true }})
    const input = wrapper.find(Input)
    // Invalid phone number
    input.setProps({ value: '12' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['valid']).toBe('input-tooltip__content--invalid')
    // Valid phone number
    input.setProps({ value: '1234' })
    wrapper.vm.updateStatus(input.vm)
    expect(wrapper.vm.invalidCondition['valid']).toBe('input-tooltip__content--valid')

  })
})


function defaultSlot(comp, props) {
  return {
    slots: {
      default: {
        render(h) {
          return h(comp, { props })
        }
      }
    }  
  }
}