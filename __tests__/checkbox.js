import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Checkbox from '@/components/checkbox'

describe('Checkbox component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Checkbox, { propsData: { name: 'checkbox-button'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render disabled checkbox', () => {
    const wrapper = mount(Checkbox, { propsData: { disabled: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should work with default value', () => {
    const wrapper = mount(Checkbox, { propsData: { checked: false } })
    expect(wrapper.vm.checked).toBe(false)
    expect(wrapper.vm.isChecked).toBe(false)
    wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual([true])
    wrapper.setProps({ checked: true })
    expect(wrapper.vm.isChecked).toBe(true)
  })

  it('should work with custom value when selected', () => {
    const wrapper = mount(Checkbox, { propsData: { checked: '', value: 'selected' } })
    expect(wrapper.vm.checked).toBe('')
    expect(wrapper.vm.isChecked).toBe(false)
    wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual(['selected'])
    wrapper.setProps({ checked: 'selected' })
    expect(wrapper.vm.isChecked).toBe(true)
  })

  it('should work with custom value when unselected', () => {
    const wrapper = mount(Checkbox, { propsData: { checked: 'selected', value: 'selected' } })
    expect(wrapper.vm.checked).toBe('selected')
    expect(wrapper.vm.isChecked).toBe(true)
    wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual([''])
    wrapper.setProps({ checked: '' })
    expect(wrapper.vm.isChecked).toBe(false)
  })

  it('should work with custom true & false value selected', () => {
    const wrapper = mount(Checkbox, { propsData: { checked: 'nope', trueValue: 'yep', falseValue: 'nope' } })
    expect(wrapper.vm.checked).toBe('nope')
    expect(wrapper.vm.isChecked).toBe(false)
    wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual(['yep'])
    wrapper.setProps({ checked: 'yep' })
    expect(wrapper.vm.isChecked).toBe(true)
  })

  it('should work with custom true & false value unselected', () => {
    const wrapper = mount(Checkbox, { propsData: { checked: 'yep', trueValue: 'yep', falseValue: 'nope' } })
    expect(wrapper.vm.checked).toBe('yep')
    expect(wrapper.vm.isChecked).toBe(true)
    wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual(['nope'])
    wrapper.setProps({ checked: 'nope' })
    expect(wrapper.vm.isChecked).toBe(false)
  })

})
