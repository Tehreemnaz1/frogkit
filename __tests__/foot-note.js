import { mount } from 'vue-test-utils'
import Vue from 'vue'
import FootNote from '@/components/foot-note'

describe('Foot Note component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(FootNote)
    expect(wrapper.html()).toMatchSnapshot()
  })

})