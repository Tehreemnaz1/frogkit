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
    const wrapper = mount(InputToolTip, defaultSlot(Input, {type: 'password'}))
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('Inputx Tooltip component', () => {
  it.only('Should render component and match snapshot', () => {
    const wrapper = mount(InputToolTip, {...defaultSlot, propsData,  mocks: {__test__: true }})
    console.log('wrapper.vm.show', wrapper.vm.show)
    // wrapper.vm.show = true
    // console.log('wrapper.vm.show', wrapper.vm.show)
    console.log('wrapper.vm.show', wrapper.html())
    // expect(wrapper.vm.show).toBe(false)
  })
})


function defaultSlot(comp, props, propsData = {}) {
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