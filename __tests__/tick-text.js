import { mount } from 'vue-test-utils'
import Vue from 'vue'
import TickText from '@/components/tick-text'

describe('Tick Text component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(TickText, {propsData: {placeholder: 'some text goes here' }})
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render component with bold text', () => {
    const wrapper = mount(TickText, {propsData: {placeholder: 'some text goes here', bold: true }})
    expect(wrapper.html()).toMatchSnapshot()
  })

})