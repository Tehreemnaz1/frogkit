import { mount } from 'vue-test-utils'
import Vue from 'vue'
import CheckList from '@/components/check-list'

describe('Check List component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(CheckList, {propsData: {placeholder: 'some text goes here' }})
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render component with bold text', () => {
    const wrapper = mount(CheckList, {propsData: {placeholder: 'some text goes here', bold: true }})
    expect(wrapper.html()).toMatchSnapshot()
  })

})