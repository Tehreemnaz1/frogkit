import { mount } from 'vue-test-utils'
import Vue from 'vue'
import Soloheader from '@/components/solo-header'

describe('Soloheader component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Text, { propsData: { logoUrl: 'https://www.smarfrog.com'} })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
