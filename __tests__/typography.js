import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Text from '@/components/typography'

const slot = { default: 'Lorem ipsum dolorem'}

describe('Text component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(Text, { slot })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 50px text font size ', () => {
    const wrapper = mount(Text, { slot, propsData: { size: 'size-50'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 38px text font size ', () => {
    const wrapper = mount(Text, { slot, propsData: { size: 'size-38'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 30px text font size ', () => {
    const wrapper = mount(Text, { slot, propsData: { size: 'size-30'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render primary text color', () => {
    const wrapper = mount(Text, { slot, propsData: { color: 'primary'} })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render light text color', () => {
    const wrapper = mount(Text, { slot, propsData: { color: 'light'} })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render 700 font weight text', () => {
    const wrapper = mount(Text, { slot, propsData: { weight: 'weight-700' } })
    expect(wrapper.html()).toMatchSnapshot
  })

  it('should render 300 font weight text', () => {
    const wrapper = mount(Text, { slot, propsData: { weight: 'weight-300' } })
    expect(wrapper.html()).toMatchSnapshot
  })

  it('Text should emit click event when clicked', () => {
    const stub = jest.fn()
    const wrapper = mount(Text)
    wrapper.vm.$on('click', stub)
    wrapper.trigger('click')
    expect(stub).toBeCalled()
  })

})
