import { mount } from 'vue-test-utils'
import Vue from 'vue'
import SocialIcon from '@/components/social-icon'

const data = {
  url: 'http://www.facebook.com/smartfrogDE',
  name: 'facebook',
  label: 'Folgen Sie auf Facebook'
}

describe('Social Icon component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(SocialIcon, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
