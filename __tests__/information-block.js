import { mount } from 'vue-test-utils'
import Vue from 'vue'
import InformationBlock from '@/components/information-block'

describe('Information Block component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(InformationBlock, {propsData: {title: 'some title goes here'}})
    expect(wrapper.html()).toMatchSnapshot()
  })

})