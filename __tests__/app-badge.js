import { mount } from 'vue-test-utils'
import Vue from 'vue'
import AppBadge from '@/components/app-badge'

const data = {
  name: 'apple',
  url: 'https://app.adjust.com/p39urb',
  label: 'Laden im'
}

describe('App Badge component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(AppBadge, { propsData: data })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
