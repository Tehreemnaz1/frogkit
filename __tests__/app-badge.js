import { mount } from 'vue-test-utils'
import Vue from 'vue'
import AppBadge from '@/components/app-badge'

const appStoreItems = {
  buttons: [
    {
      name: 'apple',
      url: 'https://app.adjust.com/p39urb',
      label: 'Laden im'
    },
    {
      name: 'google',
      url: 'https://app.adjust.com/vti0vj',
      label: 'JETZT BEI'
    }
  ]
}

describe('App Badge component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(AppBadge, { propsData: appStoreItems })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
