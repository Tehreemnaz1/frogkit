import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Input from '@/components/input'

describe('Input component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Input)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render small input', () => {
    const wrapper = mount(Input, { propsData: { size : 'small' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render input without left border', () => {
    const wrapper = mount(Input, { propsDsts: { cutSide: 'left' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render input without right border', () => {
    const wrapper = mount(Input, { propsDsts: { cutSide: 'right' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render block input', () => {
    const wrapper = mount(Input, { propsData: { block: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render disabled input', () => {
    const wrapper = mount(Input, { propsData: { disabled: true } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Input component | type password', () => {
    it('should render fine', () => {
      const wrapper = mount(Input, { propsData: { type: 'password' } })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render invalid password', () => {
      const wrapper = mount(Input, { propsData : { value:'123', type: 'password', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(true)
    })

    it('should render valid password', () => {
      const wrapper = mount(Input, { propsData : { value:'123456789', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(false)
    })
  })

  describe('Input component | type phone', () => {
    it('should render fine', () => {
      const wrapper = mount(Input, { propsData: { type: 'phone', required: true } })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render invalid phone', () => {
      const wrapper = mount(Input, { propsData : { value:'+2', type: 'phone', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(true)
    })

    it('should render valid phone', () => {
      const wrapper = mount(Input, { propsData : { value:'+25', type: 'phone', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(false)
    })
  })

  describe('Input component | type email', () => {
    it('should render fine', () => {
      const wrapper = mount(Input, { propsData: { type: 'email', required: true } })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render invalid email', () => {
      const wrapper = mount(Input, { propsData : { value:'invalid@email', type: 'email', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(true)
    })

    it('should render valid email', () => {
      const wrapper = mount(Input, { propsData : { value:'valid@email.com', type: 'email', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(false)
    })
  })

  describe('Input component | required', () => {
    it('should render with error', () => {
      const wrapper = mount(Input, { propsData : { value:'', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(true)
    })

    it('should render without error', () => {
      const wrapper = mount(Input, { propsData : { value:'tada', required: true } })
      wrapper.trigger('input')
      expect(wrapper.hasClass('fk-input--invalid')).toBe(false)
    })
  })

})
