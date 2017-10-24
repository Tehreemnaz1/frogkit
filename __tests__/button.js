import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Button from '@/components/button'

describe('Button component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render primary button', () => {
    const wrapper = mount(Button, { propsData: { color: 'primary' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render secondary button', () => {
    const wrapper = mount(Button, { propsData: { color: 'secondary' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render small button', () => {
    const wrapper = mount(Button, { propsData: { size: 'small' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render big button', () => {
    const wrapper = mount(Button, { propsData: { size: 'big' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render outline button', () => {
    const wrapper = mount(Button, { propsData: { outline: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render block button', () => {
    const wrapper = mount(Button, { propsData: { block: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render disabled button', () => {
    const wrapper = mount(Button, { propsData: { disabled: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Button should emit click event when clicked', () => {
    const stub = jest.fn()
    const wrapper = mount(Button)
    wrapper.vm.$on('click', stub)
    wrapper.trigger('click')
    expect(stub).toBeCalled()
  })

})
