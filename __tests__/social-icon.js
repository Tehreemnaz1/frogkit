import { mount } from 'vue-test-utils'
import Vue from 'vue'
import SocialIcon from '@/components/social-icon'

const socialItems = {
  headline: 'Smartfrog folgen:',
  icons: [
    {
      name: 'facebook',
      url: 'http://www.facebook.com/smartfrogDE',
      label: 'Folgen Sie auf Facebook'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/smartfrog_cam',
      label: 'Auf Twitter folgen'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCt2tBYCxnfhBWraIuOcY2Ow',
      label: 'Folgen Sie auf YouTube'
    },
    {
      name: 'instagram',
      url: 'http://instagram.com/smartfrogcam/',
      label: 'Folgen Sie auf Instagram'
    }
  ]
}

describe('Social Icon component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(SocialIcon, { propsData: socialItems })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
