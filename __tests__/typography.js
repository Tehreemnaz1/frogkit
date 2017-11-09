import { mount } from 'vue-test-utils'
import Vue from 'vue'
import FkText from '@/components/typography'

const slot = { default: 'Lorem ipsum dolorem'}

describe('Text component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(FkText, { slot })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render xl text', () => {
    const wrapper = mount(FkText, { slot, propsData: { size: 'xl'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render lg text', () => {
    const wrapper = mount(FkText, { slot, propsData: { size: 'lg'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render md text', () => {
    const wrapper = mount(FkText, { slot, propsData: { size: 'md'} })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render primary text color', () => {
    const wrapper = mount(FkText, { slot, propsData: { color: 'primary'} })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render light text color', () => {
    const wrapper = mount(FkText, { slot, propsData: { color: 'light'} })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render bold text', () => {
    const wrapper = mount(FkText, { slot, propsData: { weight: 'bold' } })
    expect(wrapper.html()).toMatchSnapshot
  })

  it('should render slim text', () => {
    const wrapper = mount(FkText, { slot, propsData: { weight: 'slim' } })
    expect(wrapper.html()).toMatchSnapshot
  })

})
