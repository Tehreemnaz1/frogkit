import { mount } from 'vue-test-utils'
import Vue from 'vue'
import InputNumber from '@/components/input-number'

describe('Input component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(InputNumber)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render small input', () => {
    const wrapper = mount(InputNumber, { propsData: { size : 'small' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render big input', () => {
    const wrapper = mount(InputNumber, { propsData: { size : 'big' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should disable decrease button', () => {
    const wrapper = mount(InputNumber, { propsData: { min : 1, value: 1, max: 5 } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should disable increase button', () => {
    const wrapper = mount(InputNumber, { propsData: { min : 1, value: 5, max: 5 } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should decrease input', () => {
    const wrapper = mount(InputNumber, { propsData: { min : 1, value: 3, max: 5 } })
    wrapper.findAll('button').at(0).trigger('click')
    expect(wrapper.emitted().input[0]).toEqual([2])
  })

  it('should increase input', () => {
    const wrapper = mount(InputNumber, { propsData: { min : 1, value: 3, max: 5 } })
    wrapper.findAll('button').at(1).trigger('click')
    expect(wrapper.emitted().input[0]).toEqual([4])
  })

})
