import { mount } from 'vue-test-utils'
import Vue from 'vue'
import SslBadge from '@/components/ssl-badge'

describe('Ssl Badge component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(SslBadge, {propsData: {text: 'Some long text goes here'}})
    expect(wrapper.html()).toMatchSnapshot()
  })

})