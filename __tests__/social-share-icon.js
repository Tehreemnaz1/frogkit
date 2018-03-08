import { mount } from 'vue-test-utils'
import Vue from 'vue'
import ShareIcons from '@/components/social-share-icon'

const propsData = {
  url: 'https://www.smartfrog.com/de-de/ebooks/kindersicherheit/'
}

describe('Social Sharing Icons component', () => {
  const attrs = {
    facebook: '',
    twitter: '',
    gplus: ''
  }
  it('Should render component and match snapshot', () => {

    const wrapper = mount(ShareIcons, {
      propsData,
      attrs,
      attachToDocument: true
     })

    wrapper.update()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
