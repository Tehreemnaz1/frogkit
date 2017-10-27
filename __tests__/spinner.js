import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Spinner from '@/components/spinner'


describe('Spinner component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Spinner)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
