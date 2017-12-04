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

})
