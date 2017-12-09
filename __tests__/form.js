import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Form from '@/components/form'
import Input from '@/components/input'
import Checkbox from '@/components/checkbox'

describe('Input component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Form)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be not valid when input is not valid', () => {
    const wrapper = mount(Form,
      defaultSlot(Input, { required: true })
    )
    const input = wrapper.find(Input)
    expect(wrapper.vm.isValid).toBe(false)
    expect(input.vm.valid).toBe(false)
  })

  it('should be valid with input is valid', () => {
    const wrapper = mount(Form,
      defaultSlot(Input, { required: true, value: '' })
    )
    const input = wrapper.find(Input)

    expect(input.vm.valid).toBe(false)
    expect(wrapper.vm.isValid).toBe(false)
    input.setProps({ value: 'tada' })
    expect(input.vm.valid).toBe(true)
    Vue.nextTick(() => {
      expect(wrapper.vm.isValid).toBe(true)
    })
  })

  it('should be not valid when checkbox is not valid', () => {
    const wrapper = mount(Form,
      defaultSlot(Checkbox, { required: true })
    )
    const checkbox = wrapper.find(Checkbox)
    expect(wrapper.vm.isValid).toBe(false)
    expect(checkbox.vm.valid).toBe(false)
  })

  it('should be valid when checkbox is valid', () => {
    const wrapper = mount(Form,
      defaultSlot(Checkbox, { required: true, checked: false })
    )
    const checkbox = wrapper.find(Checkbox)
    expect(wrapper.vm.isValid).toBe(false)
    expect(checkbox.vm.valid).toBe(false)
    checkbox.setProps({ checked: true })
    Vue.nextTick(() => {
      expect(checkbox.vm.valid).toBe(true)
      expect(wrapper.vm.isValid).toBe(true)
    })
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
