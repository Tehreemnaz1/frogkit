import { mount } from 'vue-test-utils'
import Vue from 'vue'
import DescriptionBlock from '@/components/description-block'

describe('Description Block component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(DescriptionBlock, {propsData: {title: 'some title goes here'}})
    expect(wrapper.html()).toMatchSnapshot()
  })

})